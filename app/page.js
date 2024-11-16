'use client'

import { useState } from 'react'
import { Phone } from 'lucide-react'

export default function AsistenteEmocional() {
  const [nombre, setNombre] = useState('')
  const [telefono, setTelefono] = useState('')
  const [estado, setEstado] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      const response = await fetch('/api/bland', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phone_number: telefono,
          name: nombre,
          emotional_state: estado
        }),
      })

      const data = await response.json()
      
      if (data.success) {
        alert('¡Llamada iniciada! Recibirás una llamada en breve.')
      } else {
        alert('Error al iniciar la llamada: ' + data.error)
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Error al procesar la solicitud')
    }
  }

  const estadosEmocionales = [
    { valor: 'frustrado', emoji: '😤', texto: 'Frustrado' },
    { valor: 'triste', emoji: '😢', texto: 'Triste' },
    { valor: 'estresado', emoji: '😰', texto: 'Estresado' },
    { valor: 'burnout', emoji: '😵', texto: 'Burnout' },
  ]


  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-300 via-purple-200 to-purple-100 p-4">
      <div className="bg-white/20 backdrop-blur-sm p-8 rounded-lg shadow-xl w-full max-w-md mb-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-purple-700">Natal-ia</h1>
        <p className="text-center text-purple-900 mb-8">
          Tu asistente emocional virtual, aquí para escucharte y apoyarte en momentos difíciles.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
  <div>
    <label htmlFor="nombre" className="block text-lg font-medium text-gray-800 mb-2">
      Nombre
    </label>
    <input
      id="nombre"
      type="text"
      className="block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:border-purple-300 focus:ring focus:ring-purple-200 focus:ring-opacity-50 text-black bg-white hover:bg-purple-100 transition-colors duration-200"
      value={nombre}
      onChange={(e) => setNombre(e.target.value)}
      required
    />
  </div>
  <div>
    <label htmlFor="telefono" className="block text-lg font-medium text-gray-800 mb-2">
      Teléfono
    </label>
    <input
      id="telefono"
      type="tel"
      className="block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:border-purple-300 focus:ring focus:ring-purple-200 focus:ring-opacity-50 text-black bg-white hover:bg-purple-100 transition-colors duration-200"
      value={telefono}
      onChange={(e) => setTelefono(e.target.value)}
      required
    />
  </div>
  <div>
    <label htmlFor="estado" className="block text-lg font-medium text-gray-800 mb-2">
      ¿Cómo te sientes?
    </label>
    <select
      id="estado"
      className="block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:border-purple-300 focus:ring focus:ring-purple-200 focus:ring-opacity-50 text-black bg-white hover:bg-purple-100 transition-colors duration-200"
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
  <div className="flex justify-center pt-4">
    <button
      type="submit"
      className="p-5 rounded-full bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 transition-colors duration-200 shadow-lg"
      aria-label="Solicitar Llamada"
    >
      <Phone className="text-white" size={32} />
    </button>
  </div>
</form>

      </div>
    </div>
  )
}