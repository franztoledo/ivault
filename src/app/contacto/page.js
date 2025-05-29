"use client";

import { useState } from "react";

const faqs = [
  {
    q: "¿Cuál es el tiempo de entrega?",
    a: "Envío entre 24 y 72 horas hábiles.",
  },
  {
    q: "¿Aceptan pagos en cuotas?",
    a: "Sí, aceptamos pagos en cuotas con tarjetas bancarias.",
  },
  {
    q: "¿Puedo devolver el producto?",
    a: "Sí, tienes 30 días para devoluciones con garantía oficial.",
  },
];

export default function Contacto() {
  const [formData, setFormData] = useState({ nombre: "", correo: "", mensaje: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((fd) => ({ ...fd, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica real de envío
    setSubmitted(true);
  };

  return (
    <main className="max-w-3xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Contacto y Ayuda</h1>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="nombre" className="block mb-1 font-semibold">
              Nombre
            </label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              required
              value={formData.nombre}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div>
            <label htmlFor="correo" className="block mb-1 font-semibold">
              Correo electrónico
            </label>
            <input
              id="correo"
              name="correo"
              type="email"
              required
              value={formData.correo}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div>
            <label htmlFor="mensaje" className="block mb-1 font-semibold">
              Mensaje
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows="5"
              required
              value={formData.mensaje}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 resize-none"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white rounded px-6 py-3 hover:bg-blue-700 transition"
          >
            Enviar
          </button>
        </form>
      ) : (
        <p className="text-green-600 font-semibold">¡Gracias por contactarnos! Te responderemos pronto.</p>
      )}

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Preguntas frecuentes</h2>
        {faqs.map(({ q, a }, i) => (
          <details key={i} className="mb-4 border border-gray-300 rounded p-4">
            <summary className="cursor-pointer font-semibold">{q}</summary>
            <p className="mt-2 text-gray-700">{a}</p>
          </details>
        ))}
      </section>

      <section className="mt-12 text-gray-700">
        <h3 className="font-semibold mb-2">Contacto rápido</h3>
        <p>WhatsApp: <a href="https://wa.me/51987654321" className="text-blue-600 underline">+51 987 654 321</a></p>
        <p>Dirección: Calle Falsa 123, Lima, Perú</p>
      </section>
    </main>
  );
}