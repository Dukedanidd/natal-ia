"use client";

import { useRef, useState } from "react";

const faqList = [
  {
    question: "¿Qué es esta app?",
    answer: <div className="space-y-2 leading-relaxed">Es una aplicación diseñada para brindar apoyo emocional a personas que se sienten solas o necesitan a alguien con quien hablar. Utiliza inteligencia artificial para ofrecerte una experiencia personalizada a través de llamadas que te escuchan y te dan consejos.</div>,
  },
  {
    question: "¿Qué temas puedo tratar con la IA?",
    answer: (
      <p>
        Puedes hablar sobre cualquier cosa que te preocupe: tus emociones, problemas personales, estrés o incluso simplemente tener una conversación amistosa. La IA está diseñada para adaptarse a tus necesidades.
      </p>
    ),
  },
  {
    question: "¿La IA reemplaza a un terapeuta?",
    answer: (
      <div className="space-y-2 leading-relaxed">No, nuestra app no pretende sustituir a un profesional de la salud mental. Es una herramienta de apoyo emocional que puede complementar otras formas de ayuda. Si necesitas atención médica o psicológica, te recomendamos contactar a un especialista.</div>
    ),
  },
  {
    question: "¿Cómo funciona la llamada por IA?",
    answer: (
      <div className="space-y-2 leading-relaxed">La IA está entrenada para escucharte atentamente, identificar tus emociones y responder con empatía y orientación. Puedes hablar sobre lo que te preocupa, y la IA estará ahí para apoyarte sin juzgarte.</div>
    ),
  },
];

const Item = ({ item }) => {
  const accordion = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <button
        className={`relative flex gap-2 items-center w-full py-5 text-base font-medium text-left border-t md:text-lg border-[#E8B4A4]/20 text-[#4A3B38] transition-colors duration-200 hover:text-[#9A6B5D] ${
          isOpen ? "text-[#9A6B5D]" : ""
        }`}
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        aria-expanded={isOpen}
      >
        <span className="flex-1">
          {item?.question}
        </span>
        <svg
          className={`flex-shrink-0 w-4 h-4 ml-auto fill-current transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              isOpen && "rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              isOpen && "rotate-180 hidden"
            }`}
          />
        </svg>
      </button>

      <div
        ref={accordion}
        className={`transition-all duration-300 ease-in-out`}
        style={
          isOpen
            ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="pb-5 leading-relaxed text-[#6B5550]">{item?.answer}</div>
      </div>
    </li>
  );
};
const FAQ = () => {
  return (
    <section className="bg-[#4A3B38]" id="faq">
      <div className="py-24 px-8 max-w-3xl mx-auto flex flex-col gap-12">
        <div className="flex flex-col text-center">
          <span className="inline-block px-4 py-1.5 bg-[#E8B4A4]/20 text-[#FDF8F3] rounded-full text-sm font-medium mb-4 mx-auto">
            Preguntas Frecuentes
          </span>
          <h2 className="text-4xl font-bold text-[#FDF8F3] mb-4">
            ¿Cómo podemos ayudarte?
          </h2>
          <p className="text-[#FDF8F3] max-w-2xl mx-auto">
            Encuentra respuestas a las preguntas más comunes sobre nuestro servicio de apoyo emocional
          </p>
        </div>

        <ul className="w-full bg-white/70 backdrop-blur-sm rounded-3xl shadow-sm p-8 border border-[#E8B4A4]/20">
          {faqList.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQ;
