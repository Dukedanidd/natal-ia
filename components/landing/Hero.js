import React from 'react'
import { Heart, Shield, Phone } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-[#FDF8F3] pb-20">
      <div className="absolute inset-0">
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
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-24">
        <div className="flex flex-col items-center space-y-16 text-center">
          <div className="space-y-8 max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-[#E8B4A4]/20 text-[#9A6B5D] rounded-full text-sm font-medium mb-4">
              Estamos aquí para ti
            </span>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-[#4A3B38]">
              Tu Espacio de 
              <span className="block mt-2 text-[#9A6B5D]">Escucha y Apoyo</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-lg text-[#6B5550] md:text-xl leading-relaxed">
              En momentos de dificultad, mereces un espacio seguro donde tus pensamientos 
              y emociones sean escuchados. Te acompañamos en tu camino hacia el bienestar.
            </p>
          </div>

          <button className="group relative overflow-hidden inline-flex h-14 items-center justify-center rounded-full bg-[#9A6B5D] px-12 text-lg font-medium text-white transition-all duration-300 hover:bg-[#7D574B] focus:outline-none focus:ring-2 focus:ring-[#9A6B5D] focus:ring-offset-2">
            <span className="relative z-10">Comienza tu Camino</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#E8B4A4]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-lg mb-16">
            {[
              {
                icon: Phone,
                title: "Acompañamiento Cercano",
                desc: "Estamos para escucharte cuando más lo necesites"
              },
              {
                icon: Heart,
                title: "Apoyo Empático",
                desc: "Un espacio seguro lleno de comprensión"
              },
              {
                icon: Shield,
                title: "Espacio Protegido",
                desc: "Tu confianza es nuestro mayor compromiso"
              }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center space-y-4 p-8 bg-white/70 backdrop-blur-sm rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 border border-[#E8B4A4]/20">
                <div className="p-4 bg-[#F9D5CA]/30 rounded-2xl">
                  <item.icon className="h-8 w-8 text-[#9A6B5D]" />
                </div>
                <span className="font-medium text-[#4A3B38]">{item.title}</span>
                <p className="text-sm text-[#6B5550]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}