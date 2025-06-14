"use client";

import { useEffect, useState, useRef } from "react";
import { FiChevronDown, FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import emailjs from "emailjs-com"; // Importa EmailJS

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
	const [formData, setFormData] = useState({
		nombre: "",
		correo: "",
		mensaje: "",
	});
	const [submitted, setSubmitted] = useState(false);
	const [showModal, setShowModal] = useState(false); // Estado para controlar la visibilidad del modal
	const [modalMessage, setModalMessage] = useState(""); // Estado para el mensaje del modal

	const handleChange = (e) => {
		setFormData((fd) => ({ ...fd, [e.target.name]: e.target.value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// Validar que todos los campos estén llenos
		if (!formData.nombre || !formData.correo || !formData.mensaje) {
			setModalMessage("Por favor, completa todos los campos obligatorios.");
			setShowModal(true);
			return;
		}

		// Enviar correo con EmailJS
		emailjs
			.send(
			process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, // Service ID desde variables de entorno
			process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, // Template ID desde variables de entorno
			{
				nombre: formData.nombre,
				correo: formData.correo,
				mensaje: formData.mensaje,
			},
			process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY // Public Key desde variables de entorno
			)
			.then(
			(result) => {
				setModalMessage("¡Correo enviado correctamente!");
				setShowModal(true);
				setSubmitted(true);
			},
			(error) => {
				console.error(error);
				setModalMessage("Hubo un error al enviar el correo. Inténtalo nuevamente.");
				setShowModal(true);
			}
			);
		};

	const [isVisible, setIsVisible] = useState(false);
	const sectionRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
				}
			},
			{ threshold: 0.5 } // Se activa cuando el 50% de la sección es visible
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => {
			if (sectionRef.current) {
				observer.unobserve(sectionRef.current);
			}
		};
	}, []);

	return (
		<main className="max-w-5xl mx-auto p-8">
			<h1 className="text-5xl font-extrabold text-center mb-12 text-black">
				Contacto y Ayuda
			</h1>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
				{/* Formulario de contacto */}
				<div>
					<h2 className="text-3xl font-bold mb-6 text-black">
						Envíanos un mensaje
					</h2>
					{!submitted ? (
						<form
							onSubmit={handleSubmit}
							className="space-y-6 bg-white p-6 rounded-lg shadow-md"
						>
							<div>
								<label
									htmlFor="nombre"
									className="block mb-1 font-semibold text-black"
								>
									Nombre
								</label>
								<input
									id="nombre"
									name="nombre"
									type="text"
									required
									value={formData.nombre}
									onChange={handleChange}
									className="w-full border border-black rounded-lg px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none"
								/>
							</div>

							<div>
								<label
									htmlFor="correo"
									className="block mb-1 font-semibold text-black"
								>
									Correo electrónico
								</label>
								<input
									id="correo"
									name="correo"
									type="email"
									required
									value={formData.correo}
									onChange={handleChange}
									className="w-full border border-black rounded-lg px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none"
								/>
							</div>

							<div>
								<label
									htmlFor="mensaje"
									className="block mb-1 font-semibold text-black"
								>
									Mensaje
								</label>
								<textarea
									id="mensaje"
									name="mensaje"
									rows="5"
									required
									value={formData.mensaje}
									onChange={handleChange}
									className="w-full border border-black rounded-lg px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none resize-none"
								/>
							</div>

							<button
								type="submit"
								className="w-full bg-white text-black border border-black rounded-lg px-6 py-3 font-semibold hover:bg-black hover:text-white transition"
							>
								Enviar
							</button>
						</form>
					) : (
						<p className="text-black font-semibold text-lg bg-gray-100 p-4 rounded-lg">
							¡Gracias por contactarnos! Te responderemos pronto.
						</p>
					)}
				</div>

				{/* Información de contacto */}
				<div>
					<h2 className="text-3xl font-bold mb-6 text-black">
						Información de contacto
					</h2>
					<div className="space-y-4">
						<div className="flex items-center space-x-4 transition-transform hover:scale-105 hover:opacity-80">
							<FiPhone className="text-black text-2xl" />
							<p className="text-black">
								WhatsApp:{" "}
								<a
									href="https://wa.me/51935565755"
									className="text-black underline hover:text-gray-800 transition"
								>
									+51 935 565 755
								</a>
							</p>
						</div>
						<div className="flex items-center space-x-4 transition-transform hover:scale-105 hover:opacity-80">
							<FiMail className="text-black text-2xl" />
							<p className="text-black">
								Correo:{" "}
								<a
									href="mailto:ivault.imports@gmail.com"
									className="text-black underline hover:text-gray-800 transition"
								>
									ivault.imports@gmail.com
								</a>
							</p>
						</div>
						<div className="flex items-center space-x-4 transition-transform hover:scale-105 hover:opacity-80">
							<FiMapPin className="text-black text-2xl" />
							<p className="text-black">
								Dirección: Urbanización Palomino, Lima, Perú
							</p>
						</div>
					</div>

					{/* Mapa embebido */}
					<div className="mt-8 transition-transform hover:scale-105">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.123456789012!2d-77.0427936846789!3d-12.0463743456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8c123456789%3A0x123456789abcdef!2sUrbanizaci%C3%B3n%20Palomino%2C%20Lima%2C%20Per%C3%BA!5e0!3m2!1ses!2spe!4v1681234567890!5m2!1ses!2spe"
							width="100%"
							height="250"
							style={{ border: 0 }}
							allowFullScreen=""
							loading="lazy"
							className="rounded-lg shadow-md"
						></iframe>
					</div>
				</div>
			</div>

			{/* Modal */}
		{showModal && (
			<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
			<div className="bg-white p-6 rounded-lg shadow-lg text-center">
				<p className="text-lg font-semibold text-black">{modalMessage}</p>
				<button
				onClick={() => setShowModal(false)}
				className="mt-4 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
				>
				Cerrar
				</button>
			</div>
			</div>
		)}
			{/* Preguntas frecuentes */}
			<section className="mt-12">
				<h2 className="text-3xl font-bold mb-6 text-black">
					Preguntas frecuentes
				</h2>
				{faqs.map(({ q, a }, i) => (
					<details
						key={i}
						className="mb-4 border border-black rounded-lg p-4 shadow-sm transition-transform hover:scale-105 hover:opacity-80"
					>
						<summary className="cursor-pointer font-semibold flex items-center justify-between text-black">
							{q}
							<FiChevronDown className="text-black" />
						</summary>
						<p className="mt-2 text-black">{a}</p>
					</details>
				))}
			</section>

			{/* Redes sociales */}
			<section
				ref={sectionRef}
				className={`mt-12 text-center transition-opacity duration-1000 ${
					isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
				}`}
			>
				<h2 className="text-4xl font-bold text-gray-800 mb-4">
					El iPhone que quieres, con la confianza que mereces
				</h2>
				<p className="text-lg text-gray-600 mb-8">
					Encuentra el iPhone perfecto para ti, con la seguridad de una compra
					confiable.
				</p>
				<div className="flex justify-center">
					<img
						src="/ivaultnobk.png" // filepath: c:\Proyectos\ivault\public\ivaultnobk.png
						alt="iVault Logo"
						className="w-48 h-48 object-contain"
					/>
				</div>
				
			</section>
		</main>
	);
}