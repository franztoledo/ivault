"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass =
    "text-gray-600 font-medium hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition";

  return (
    <header className="w-full px-6 py-4 flex justify-between items-center border-b border-gray-200 relative">
      <div className="text-xl font-bold tracking-tight text-gray-900">iVault</div>

      {/* Navegación Desktop */}
      <nav className="space-x-6 hidden md:flex">
        <Link href="/" className={linkClass}>
          Inicio
        </Link>
        <Link href="#catalogo" className={linkClass}>
          Catálogo
        </Link>
        <Link href="/sobre-nosotros" className={linkClass}>
          Sobre Nosotros
        </Link>
        <Link href="/contacto" className={linkClass}>
          Contacto
        </Link>
      </nav>

      {/* Botón hamburguesa móvil */}
      <button
        aria-label="Abrir menú"
        className="md:hidden p-2 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="w-6 h-6 text-gray-700"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Menú móvil desplegable */}
      {isOpen && (
        <nav className="absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-md flex flex-col md:hidden z-50">
          <Link
            href="/"
            className="px-6 py-4 border-b border-gray-200 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Inicio
          </Link>
          <Link
            href="#catalogo"
            className="px-6 py-4 border-b border-gray-200 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Catálogo
          </Link>
          <Link
            href="/sobre-nosotros"
            className="px-6 py-4 border-b border-gray-200 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Sobre Nosotros
          </Link>
          <Link
            href="/contacto"
            className="px-6 py-4 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Contacto
          </Link>
        </nav>
      )}
    </header>
  );
}