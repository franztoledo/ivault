import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-6xl mx-auto px-8 text-center">
        <p className="text-sm mb-4 text-gray-500">
          © 2025 iVault. Todos los derechos reservados.
        </p>
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="#"
            aria-label="Facebook"
            className="hover:text-gray-300 transition-transform transform hover:scale-110"
          >
            <FontAwesomeIcon icon={faFacebook} className="w-6 h-6" />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="hover:text-gray-300 transition-transform transform hover:scale-110"
          >
            <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
          </a>
        </div>
        <p className="text-xs text-gray-500">
            Síguenos en nuestras redes sociales para estar al tanto de nuestras últimas ofertas y novedades.
        </p>
      </div>
    </footer>
  );
}