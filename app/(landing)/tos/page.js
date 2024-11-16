import Link from "next/link";
import config from "@/config";

// CHATGPT PROMPT TO GENERATE YOUR TERMS & SERVICES — replace with your own data 👇

// 1. Go to https://chat.openai.com/
// 2. Copy paste bellow
// 3. Replace the data with your own (if needed)
// 4. Paste the answer from ChatGPT directly in the <pre> tag below

// You are an excellent lawyer.

// I need your help to write a simple Terms & Services for my website. Here is some context:
// - Website: https://shipfa.st
// - Name: ShipFast
// - Contact information: marc@shipfa.st
// - Description: A JavaScript code boilerplate to help entrepreneurs launch their startups faster
// - Ownership: when buying a package, users can download code to create apps. They own the code but they do not have the right to resell it. They can ask for a full refund within 7 day after the purchase.
// - User data collected: name, email and payment information
// - Non-personal data collection: web cookies
// - Link to privacy-policy: https://shipfa.st/privacy-policy
// - Governing Law: France
// - Updates to the Terms: users will be updated by email

// Please write a simple Terms & Services for my site. Add the current date. Do not add or explain your reasoning. Answer:

const TOS = () => {
  return (
    <main className="bg-base-100 w-full min-h-screen flex flex-col justify-center items-center">
      <div className="p-5 max-w-2xl w-full">
        <Link href="/" className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>
          Back
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          Terms and Conditions for {config.appName}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`1. Aceptación de los Términos

Al acceder y utilizar nuestra aplicación, aceptas cumplir con estos Términos y Condiciones. Si no estás de acuerdo con alguna de las disposiciones, no utilices nuestros servicios.

2. Objetivo de la Aplicación

Nuestra aplicación está diseñada para brindar acompañamiento emocional y primeros auxilios psicológicos en momentos de crisis, a través de sesiones de atención telefónica. El objetivo es proporcionar un espacio seguro donde los usuarios puedan expresar sus emociones, recibir apoyo y encontrar claridad en sus pensamientos, sin juicios y con empatía.

3. Naturaleza del Servicio

El servicio proporcionado por nuestra aplicación no sustituye un tratamiento médico o psicológico profesional. En casos de emergencias de salud mental graves, recomendamos que contactes con un profesional certificado o acudas a servicios de emergencia.
El acompañante emocional está capacitado para escuchar activamente, validar tus emociones y ofrecer apoyo durante la conversación. Sin embargo, no se proporcionan diagnósticos médicos ni soluciones definitivas.
4. Autonomía del Usuario

Nuestra aplicación promueve la autonomía del usuario. Durante las sesiones, se guiará al usuario a través de su propio proceso emocional, respetando sus tiempos y decisiones.
Las respuestas del acompañante serán claras, cálidas y cercanas, y nunca se impondrán soluciones. El usuario es libre de decidir el curso de la conversación.
5. Privacidad y Confidencialidad

La información compartida durante las sesiones será tratada con la más estricta confidencialidad. No se almacenarán detalles personales o conversaciones más allá de lo necesario para la mejora del servicio.
A pesar de nuestro compromiso con la privacidad, no podemos garantizar una confidencialidad absoluta en situaciones de emergencia donde pueda ser necesario contactar con servicios médicos o autoridades pertinentes.
6. Uso Responsable del Servicio

Te comprometes a utilizar la aplicación de manera responsable y ética, respetando la naturaleza del servicio y las intenciones del acompañante emocional.
No se permitirá el uso del servicio para comportamientos abusivos, amenazas, acoso o cualquier tipo de maltrato hacia el acompañante o hacia otros usuarios.
7. Limitación de Responsabilidad

El servicio de acompañamiento emocional está destinado a ser un apoyo temporal en momentos de crisis. No garantizamos una solución inmediata o permanente a los problemas de salud mental del usuario.
En caso de necesidad de intervención profesional, el usuario será guiado a buscar atención en los recursos adecuados.
8. ODS-3: Salud y Bienestar

Nuestra aplicación sigue los principios del Objetivo de Desarrollo Sostenible 3 (ODS-3) de la ONU, promoviendo la salud y el bienestar para todos los usuarios. Esto incluye el fomento de la salud mental y emocional, la creación de un entorno seguro para la expresión de sentimientos y la validación de las emociones del usuario. El enfoque se mantiene en la no discriminación, el acceso igualitario a la ayuda emocional y el respeto por las decisiones autónomas de cada persona.

9. Actualizaciones de los Términos

Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. Las modificaciones entrarán en vigor tan pronto como se publiquen en la aplicación. Es responsabilidad del usuario revisar periódicamente estos términos.

10. Contacto

Si tienes preguntas o inquietudes acerca de estos Términos y Condiciones, puedes ponerte en contacto con nosotros a través de jd.daniel.contact@gmail.com.`}
        </pre>
      </div>
    </main>
  );
};

export default TOS;
