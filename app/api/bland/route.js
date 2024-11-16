import { NextResponse } from "next/server";
import User from '../../../models/User';
import connectMongo from '../../../libs/mongoose';
// Configuraciones básicas para esta ruta
export const maxDuration = 60; // Tiempo máximo de espera
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

const BLAND_API_KEY = process.env.BLAND_API_KEY;
const BLAND_API_URL = "https://api.bland.ai/v1/calls";

export async function POST(req) {
    await connectMongo(); // Conectar a MongoDB antes de manejar la solicitud

    if (!BLAND_API_KEY) {
        console.error("Error: BLAND_API_KEY no está configurada");
        return NextResponse.json(
            { error: "Error de configuración del servidor" },
            { status: 500 }
        );
    }

    try {
        const data = await req.json();
        console.log("Datos recibidos:", data);

        if (!data.phone_number) {
            return NextResponse.json(
                { error: "Número de teléfono requerido" },
                { status: 400 }
            );
        }

        // Formatear el número de teléfono al formato E.164
        let formattedPhone = data.phone_number.replace(/\D/g, "");
        if (!formattedPhone.startsWith("52")) {
            formattedPhone = "52" + formattedPhone;
        }
        if (!formattedPhone.startsWith("+")) {
            formattedPhone = "+" + formattedPhone;
        }

        const blandData = {
            phone_number: formattedPhone,
            first_sentence: `Hola ${data.name}, veo que te sientes ${data.emotional_state}, estoy aquí para escucharte, ¿cómo te puedo ayudar?`,
            task: `
        "Eres un asistente especializado en apoyo emocional y primeros auxilios psicológicos, con entrenamiento en intervención en crisis. Tu función es:
ENFOQUE PRINCIPAL:

Crear un espacio seguro y confidencial para la expresión emocional
Brindar escucha activa y empática, sin juicios
Validar y normalizar las emociones expresadas
Ayudar a organizar pensamientos confusos
Ofrecer técnicas de autorregulación cuando sea apropiado

DIRECTRICES DE COMUNICACIÓN:

Usa un tono cálido, respetuoso y profesional
Refleja el lenguaje y las emociones de la persona
Haz preguntas abiertas para explorar sentimientos
Evita dar consejos directos o soluciones rápidas
Mantén un ritmo pausado en la conversación

HERRAMIENTAS DE INTERVENCIÓN:

Parafraseo empático: "Si entiendo bien, estás sintiendo..."
Validación emocional: "Es completamente comprensible sentirse así dado lo que describes..."
Exploración suave: "¿Podrías contarme más sobre ese sentimiento?"
Técnicas de regulación: "¿Te gustaría que probáramos un ejercicio de respiración juntos?"

PROTOCOLOS DE SEGURIDAD:
Si la persona expresa:

Ideas de autolesión
Crisis severa
Riesgo inmediato
Debes guiarla hacia recursos profesionales de salud mental y servicios de emergencia.

EJEMPLOS DE RESPUESTAS:
Para angustia general:
"Escucho que estás atravesando un momento muy difícil. Estoy aquí para acompañarte. ¿Qué es lo que más te preocupa en este momento?"
Para estados de ansiedad:
"Notó que tu ansiedad está muy alta ahora. ¿Te gustaría que intentemos un ejercicio de respiración juntos? Podemos ir a tu ritmo."
Para confusión o abrumación:
"Hay muchas cosas pasando por tu mente ahora. ¿Te ayudaría si tomamos un momento para ordenar estos pensamientos uno por uno?"
TÉCNICA DE RESPIRACIÓN GUIADA:
"Te propongo este ejercicio simple:

Inhala suavemente contando hasta 4
Mantén el aire por 4 segundos
Exhala lentamente contando hasta 4
Espera 4 segundos antes de volver a empezar
Hazlo a tu propio ritmo, sin forzar. Estoy aquí acompañándote."

LIMITACIONES IMPORTANTES:

No diagnostiques ni sugieras tratamientos
No des consejos médicos o psiquiátricos
No asumas el rol de un profesional de salud mental
Mantén los límites profesionales claros

OBJETIVO FINAL:
Tu meta no es resolver problemas sino crear un espacio seguro donde la persona pueda:

Sentirse escuchada y comprendida
Explorar sus emociones sin juicios
Comenzar a organizar sus pensamientos
Acceder a técnicas básicas de autorregulación
Identificar sus propios recursos y fortalezas"
      `,
            model: "turbo",
            language: "es",
            voice: "Public - June 2978",
            max_duration: 12,
            transfer_phone_number: "+52 800 911 2000",
            transfer_list: {
                "Linea de la Vida": "+52 800 911 2000",
                Psicologo: "+526144277168",
            },
            metadata: {
                call_type: "psychological_support",
                user_name: data.name,
                emotional_state: data.emotional_state
            },
        };

        // Control de tiempo para la solicitud
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 50000); // 50 segundos

        const response = await fetch(BLAND_API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: BLAND_API_KEY,
            },
            body: JSON.stringify(blandData),
            signal: controller.signal,
        });

        clearTimeout(timeoutId);

        const result = await response.json();
        console.log("Respuesta de Bland:", result);

        if (!response.ok) {
            throw new Error(result.message || "Error en la API de Bland");
        }

        // Guardar el historial de llamadas en la base de datos
        const user = await User.findOne({ phone_number: formattedPhone });
        if (user) {
            const newCall = {
                date: new Date(),
                emotionalState: data.emotional_state,
                messages: [
                    {
                        sender: "user",
                        text: `Me siento ${data.emotional_state}`,
                        timestamp: new Date(),
                    },
                    {
                        sender: "assistant",
                        text: blandData.first_sentence,
                        timestamp: new Date(),
                    },
                ],
            };

            user.callHistory.push(newCall);
            await user.save(); // Guardar los cambios en la base de datos
        }

        return NextResponse.json({
            success: true,
            callId: result.call_id,
        });
    } catch (error) {
        console.error("Error detallado:", {
            message: error.message,
            stack: error.stack,
            name: error.name,
        });

        if (error.name === "AbortError") {
            return NextResponse.json(
                { error: "La llamada tomó demasiado tiempo en completarse" },
                { status: 504 }
            );
        }

        return NextResponse.json(
            { error: error.message || "Error al procesar la solicitud" },
            { status: 500 }
        );
    }
}