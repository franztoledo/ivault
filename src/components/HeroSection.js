"use client";

export default function HeroSection({ onScrollToCatalog }) {
  return (
    <section id="inicio" className="text-center py-20 px-8">
      <h1 className="text-5xl font-extrabold max-w-3xl mx-auto">
        Tu nuevo <span className="text-black">iPhone,</span> <br /> sin complicaciones.
      </h1>
      <button
        onClick={onScrollToCatalog}
        className="mt-8 px-8 py-3 border border-gray-300 rounded-full hover:bg-gray-100 transition"
      >
        Ver modelos
      </button>
      <div className="mt-12 flex justify-center">
        <img
          src="/iPhonehero.png"
          alt="iPhone 14 Pro"
          className="w-96 object-contain"
        />
      </div>
    </section>
  );
}

