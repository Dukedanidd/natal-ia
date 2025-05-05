'use client'
import { useState } from 'react'

export default function ChatPage() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hola, estoy aquí para escucharte. ¿Qué te gustaría compartir hoy?' }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!input.trim()) return

    const newMessages = [...messages, { role: 'user', content: input }]
    setMessages(newMessages)
    setInput('')
    setLoading(true)

    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: newMessages })
    })

    const data = await res.json()
    if (data.reply) {
      setMessages([...newMessages, { role: 'assistant', content: data.reply }])
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center px-4 py-8">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-xl flex flex-col h-[80vh] border border-blue-200 overflow-hidden">
        <div className="bg-gradient-to-r from-blue-400 to-green-400 text-white px-6 py-4 font-semibold text-lg">
          Apoyo emocional 💬
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg, idx) => (
            <div key={idx} className={`text-sm whitespace-pre-wrap ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
              <div className={`inline-block px-4 py-2 rounded-xl max-w-[75%] ${
                msg.role === 'user'
                  ? 'bg-blue-100 text-blue-900'
                  : 'bg-green-100 text-green-900'
              }`}>
                {msg.content}
              </div>
            </div>
          ))}
          {loading && (
            <div className="text-left">
              <div className="inline-block px-4 py-2 rounded-xl bg-green-100 text-green-900 text-sm animate-pulse">
                Escribiendo...
              </div>
            </div>
          )}
        </div>
        <form onSubmit={handleSubmit} className="flex border-t border-blue-200">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 p-3 text-sm focus:outline-none"
            placeholder="Escribe lo que sientes..."
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-500 text-white px-5 py-2 hover:bg-blue-600 transition disabled:opacity-50"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  )
}
