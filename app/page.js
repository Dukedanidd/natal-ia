'use client'

import { useState } from 'react'
import { Phone } from 'lucide-react'

export default function AsistenteEmocional() {
  const [nombre, setNombre] = useState('')
  const [telefono, setTelefono] = useState('')
  const [estado, setEstado] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí puedes agregar la lógica para manejar la llamada
    console.log('Llamada solicitada para:', nombre, telefono, estado)
  }

  const estadosEmocionales = [
    { valor: 'frustrado', emoji: '😤', texto: 'Frustrado' },
    { valor: 'triste', emoji: '😢', texto: 'Triste' },
    { valor: 'estresado', emoji: '😰', texto: 'Estresado' },
    { valor: 'burnout', emoji: '😵', texto: 'Burnout' },
  ]

  const numerosEmergencia = [
    { nombre: 'Línea Nacional contra el suicidio', numero: '800 911 2000' },
    { nombre: 'Línea Nacional de Salud Mental', numero: '800 911 2000' },
    { nombre: 'Centro de Atención a Víctimas de Violencia', numero: '800 822 6600' },
  ]

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-100 via-blue-200 to-blue-300 p-4">
      <div className="bg-white bg-opacity-95 p-8 rounded-lg shadow-xl w-full max-w-md mb-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">Natal-ia</h1>
        <p className="text-center text-gray-600 mb-8">
          Tu asistente emocional virtual, aquí para escucharte y apoyarte en momentos difíciles.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="nombre" className="block text-lg font-medium text-gray-700 mb-2">Nombre</label>
            <input 
              id="nombre" 
              type="text"
              className="block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-lg bg-white"
              value={nombre} 
              onChange={(e) => setNombre(e.target.value)} 
              required 
            />
          </div>
          <div>
            <label htmlFor="telefono" className="block text-lg font-medium text-gray-700 mb-2">Teléfono</label>
            <input 
              id="telefono" 
              type="tel"
              className="block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-lg bg-white"
              value={telefono} 
              onChange={(e) => setTelefono(e.target.value)} 
              required 
            />
          </div>
          <div>
            <label htmlFor="estado" className="block text-lg font-medium text-gray-700 mb-2">¿Cómo te sientes?</label>
            <select 
              id="estado"
              className="block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-lg bg-white"
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
      <div className="bg-white bg-opacity-95 p-6 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4 text-blue-600">Números de Emergencia</h2>
        <ul className="space-y-2">
          {numerosEmergencia.map((item, index) => (
            <li key={index} className="flex justify-between items-center">
              <span className="text-gray-700">{item.nombre}:</span>
              <a href={`tel:${item.numero}`} className="text-blue-600 hover:text-blue-800 font-semibold">
                {item.numero}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}