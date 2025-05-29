// src/components/TrustBadges.js
export default function TrustBadges() {
  return (
    <section className="flex justify-center space-x-12 py-8 text-gray-600 text-sm font-medium">
      <div className="flex items-center space-x-2">
        <svg
          className="w-6 h-6 text-green-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
        <span>Garantía oficial</span>
      </div>
      <div className="flex items-center space-x-2">
        <svg
          className="w-6 h-6 text-blue-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <rect x="2" y="7" width="20" height="10" rx="2" ry="2" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M2 7h20M7 7v10" />
        </svg>
        <span>Pago seguro</span>
      </div>
      <div className="flex items-center space-x-2">
        <svg
          className="w-6 h-6 text-purple-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M12 10v10M3 20h18" />
          <path d="M7 10V7a5 5 0 0110 0v3" />
        </svg>
        <span>Envío en 24-72 h</span>
      </div>
    </section>
  );
}