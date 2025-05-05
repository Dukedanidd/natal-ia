// app/api/chat/route.js
import { OpenAI } from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

export async function POST(req) {
  const body = await req.json()
  const messages = (body.messages || []).filter(
    (m) => m && m.content && typeof m.content === 'string'
  )

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: `Eres un asistente especializado en apoyo emocional y primeros auxilios psicológicos...` // Aquí pones todo tu prompt largo
        },
        ...messages
      ],
      temperature: 0.7
    })

    const reply = completion.choices?.[0]?.message?.content || 'Lo siento, no pude procesar tu mensaje.'
    return new Response(JSON.stringify({ reply }), {
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (error) {
    console.error('Error in chat API:', error)
    return new Response(JSON.stringify({ error: 'Error procesando el mensaje.' }), {
      status: 500
    })
  }
}
