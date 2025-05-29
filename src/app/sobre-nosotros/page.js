import { LightBulbIcon, ShieldCheckIcon, UsersIcon } from "@heroicons/react/outline";

export default function SobreNosotros() {
  return (
    <main className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Sobre Nosotros</h1>
      <p className="text-gray-600 leading-relaxed text-center mb-12">
        En iVault, somos una tienda especializada en la venta de iPhones. Nos enfocamos en ofrecer productos certificados, atención personalizada y precios competitivos.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="flex flex-col items-center text-center group">
          <ShieldCheckIcon className="w-12 h-12 text-gray-800 mb-4 group-hover:text-blue-500 transition-colors" />
          <h2 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-blue-500 transition-colors">
            Calidad Garantizada
          </h2>
          <p className="text-gray-600">
            Todos nuestros productos son certificados y cumplen con los estándares más altos de calidad.
          </p>
        </div>
        <div className="flex flex-col items-center text-center group">
          <LightBulbIcon className="w-12 h-12 text-gray-800 mb-4 group-hover:text-yellow-500 transition-colors" />
          <h2 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-yellow-500 transition-colors">
            Innovación
          </h2>
          <p className="text-gray-600">
            Nos mantenemos a la vanguardia tecnológica para ofrecerte lo mejor en dispositivos móviles.
          </p>
        </div>
        <div className="flex flex-col items-center text-center group">
          <UsersIcon className="w-12 h-12 text-gray-800 mb-4 group-hover:text-green-500 transition-colors" />
          <h2 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-green-500 transition-colors">
            Atención Personalizada
          </h2>
          <p className="text-gray-600">
            Nuestro equipo está listo para ayudarte en cada paso de tu compra.
          </p>
        </div>
      </div>
    </main>
  );
}