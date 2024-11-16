import Image from "next/image";
import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center">
      {/* Header */}
      <header className="w-full bg-blue-600 p-4 text-white flex justify-between items-center">
        <h1 className="text-2xl font-bold">EnvioXEnvio</h1>
        <nav className="flex space-x-4">
          <a href="#" className="hover:underline">Instant Rate</a>
          <a href="#" className="hover:underline">Servicios</a>
          <a href="#" className="hover:underline">Quiénes Somos</a>
          <a href="#" className="hover:underline">Blog</a>
          <a href="#" className="hover:underline">API</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow w-full flex flex-col items-center justify-center p-6">
        <h2 className="text-4xl font-bold text-center text-gray-700 mb-4">
          Bienvenido a EnvioXEnvio
        </h2>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700">
          TESTING
        </button>
      </main>

      {/* Footer */}
      <footer className="w-full bg-gray-800 p-4 text-white text-center">
        <p>© 2024 EnvioXEnvio. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
