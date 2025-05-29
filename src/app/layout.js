import '../styles/globals.css';
import Header from '../components/Header';

export const metadata = {
  title: 'iVault - Tu tienda de iPhones',
  description: 'Compra tu nuevo iPhone sin complicaciones',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-white text-gray-900">
        <Header />
        {children}
      </body>
    </html>
  );
}