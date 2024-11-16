import React from 'react'
import { Heart, Shield, Phone } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-100 via-purple-200 to-blue-300 p-4">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-12 text-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-black">
              AI-UDA
            </h1>
            <p className="mx-auto max-w-[700px] text-xl text-purple-900 dark:text-purple-600 md:text-2xl">
              Tu compañero virtual está aquí para escucharte, apoyarte y acompañarte en cualquier momento.
            </p>
          </div>
          <button
            className="inline-flex h-14 items-center justify-center rounded-full bg-purple-400 px-10 text-lg font-medium text-white transition-colors hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2"
          >
            Llamada
          </button>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-lg text-purple-600">
            <div className="flex flex-col items-center space-y-2 p-6 bg-white/20 backdrop-blur-sm rounded-lg shadow-md">
              <Phone className="h-8 w-8" />
              <span>Llamadas 24/7</span>
            </div>
            <div className="flex flex-col items-center space-y-2 p-6 bg-white/20 backdrop-blur-sm rounded-lg shadow-md">
              <Heart className="h-8 w-8" />
              <span>Apoyo Emocional</span>
            </div>
            <div className="flex flex-col items-center space-y-2 p-6 bg-white/20 backdrop-blur-sm rounded-lg shadow-md">
              <Shield className="h-8 w-8" />
              <span>100% Confidencial</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}