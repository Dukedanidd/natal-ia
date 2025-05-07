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
    <div className="min-h-screen bg-[#86adad] flex items-center justify-center px-4 py-8">
      <div className="bg-white rounded-3xl shadow-xl w-full max-w-xl flex flex-col h-[80vh] overflow-hidden">
        <div className="bg-[#86adad] text-white px-6 py-4 font-semibold text-lg tracking-wide">
          Apoyo emocional 💬
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg, idx) => (
            <div key={idx} className={`text-sm whitespace-pre-wrap ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
              <div className={`inline-block px-4 py-2 rounded-2xl max-w-[75%] ${
                msg.role === 'user'
                  ? 'bg-[#86adad] text-white'
                  : 'bg-gray-100 text-gray-800'
              }`}>
                {msg.content}
              </div>
            </div>
          ))}
          {loading && (
            <div className="text-left">
              <div className="inline-block px-4 py-2 rounded-2xl bg-gray-100 text-gray-800 text-sm">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-[#86adad] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                  <div className="w-2 h-2 bg-[#86adad] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="w-2 h-2 bg-[#86adad] rounded-full animate-bounce"></div>
                </div>
              </div>
            </div>
          )}
        </div>
        <form onSubmit={handleSubmit} className="border-t border-gray-100 bg-white">
          <div className="flex p-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 p-3 text-sm text-gray-800 bg-transparent placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#86adad]/30 rounded-xl"
              placeholder="Escribe lo que sientes..."
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="bg-[#86adad] text-white px-5 py-2 rounded-xl hover:opacity-90 transition disabled:opacity-50 ml-2 flex items-center gap-2"
            >
              Enviar
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
