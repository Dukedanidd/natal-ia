"use client";

import { useState } from "react";
import { Phone, Heart, MessageCircle, Sparkles } from "lucide-react";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import toast, { Toaster } from "react-hot-toast";
export default function AsistenteEmocional() {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [estado, setEstado] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/bland", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone_number: telefono,
          name: nombre,
          emotional_state: estado,
        }),
      });

      const data = await response.json();

      if (data.success) {
        toast.success("¡Llamada iniciada! Recibirás una llamada en breve.");
      } else {
        toast.error("Error al iniciar la llamada: " + data.error);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error al procesar la solicitud");
    }
  };

  const estadosEmocionales = [
    { valor: "frustrado", emoji: "😤", texto: "Frustrado" },
    { valor: "triste", emoji: "😢", texto: "Triste" },
    { valor: "estresado", emoji: "😰", texto: "Estresado" },
    { valor: "burnout", emoji: "😵", texto: "Burnout" },
    { valor: "feliz", emoji: "😊", texto: "Feliz" },
    { valor: "ansioso", emoji: "😟", texto: "Ansioso" },
    { valor: "enojado", emoji: "😡", texto: "Enojado" },
    { valor: "sorprendido", emoji: "😲", texto: "Sorprendido" },
  ];

  return (
    <>
      <section
        id="asistente-emocional"
        className="min-h-screen relative overflow-hidden bg-secondary/70"
      >
        {/* Patrón de fondo similar al Hero */}
        {/* <div className="absolute inset-0">
          <svg className="absolute w-full h-full opacity-[0.15]" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,0 C30,20 70,20 100,0 L100,100 L0,100 Z" fill="#E8B4A4" />
          </svg>
          <div className="absolute inset-0" 
            style={{
              backgroundImage: `radial-gradient(circle at 20% 30%, #F9D5CA 1px, transparent 1px),
                               radial-gradient(circle at 80% 70%, #E8B4A4 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
              opacity: 0.3
            }}
          />
        </div> */}

        <div className="container mx-auto px-4 relative z-10 min-h-screen flex flex-col items-center justify-center">
          <div className="w-full max-w-md space-y-8">
            <div className="text-center space-y-4">
              <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary/1000 rounded-full text-sm font-medium">
                Sof-ia está aquí para ti
              </span>
              <h1 className="text-3xl font-bold text-foreground">
                Tu Asistente Emocional
              </h1>
              <p className="text-foreground/80">
                Un espacio seguro para compartir tus emociones y recibir el
                apoyo que necesitas
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl shadow-sm p-8 space-y-6 border border-primary/20"
            >
              <div>
                <label
                  htmlFor="nombre"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Nombre
                </label>
                <input
                  id="nombre"
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-primary focus:ring focus:ring-primary/20 text-gray-700 transition-colors duration-200"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="telefono"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Teléfono
                </label>
                <input
                  id="telefono"
                  type="tel"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-primary focus:ring focus:ring-primary/20 text-gray-700 transition-colors duration-200"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="estado"
                  className="block text-gray-700 font-medium mb-2"
                >
                  ¿Cómo te sientes?
                </label>
                <select
                  id="estado"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-primary focus:ring focus:ring-primary/20 text-gray-700 transition-colors duration-200"
                  value={estado}
                  onChange={(e) => setEstado(e.target.value)}
                  required
                >
                  <option value="">Selecciona tu estado emocional</option>
                  {estadosEmocionales.map((estado) => (
                    <option key={estado.valor} value={estado.valor}>
                      {estado.emoji} {estado.texto}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="w-full group relative overflow-hidden inline-flex h-14 items-center justify-center rounded-xl bg-primary text-lg font-medium text-white transition-all duration-300 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Solicitar Llamada
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </form>

            <div className="grid grid-cols-3 gap-4 text-center text-sm">
              <div className="text-gray-700">
                <Heart className="w-5 h-5 mx-auto mb-1 text-primary" />
                Apoyo Empático
              </div>
              <div className="text-gray-700">
                <MessageCircle className="w-5 h-5 mx-auto mb-1 text-primary" />
                Escucha Activa
              </div>
              <div className="text-gray-700">
                <Sparkles className="w-5 h-5 mx-auto mb-1 text-primary" />
                Sin Juicios
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
