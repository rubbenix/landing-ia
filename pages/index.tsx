import Image from "next/image";
import localFont from "next/font/local";



export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center">
      {/* Header */}
      <header className="w-full bg-black p-4 text-white flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Image
            src="./logoX.svg"
            alt="logo"
            width={50}
            height={50}
          />
          <span className="text-white text-xl xl:text-2xl font-semibold font-aileron uppercase">ENVIO X ENVIO</span>
        </div>        <nav className="flex space-x-4">
          <a href="https://www.envioxenvio.es/#instant-rate" className="hover:underline">Instant Rate</a>
          <a href="https://www.envioxenvio.es/servicios" className="hover:underline">Servicios</a>
          <a href="https://www.envioxenvio.es/quienes-somos" className="hover:underline">Quiénes Somos</a>
          <a href="https://www.envioxenvio.es/blog" className="hover:underline">Blog</a>
          <a href="https://www.envioxenvio.es/api-landing" className="hover:underline">API</a>
        </nav>
        <div className="flex space-x-2">
          <button className="bg-[#7FFFFF] text-[#003366] px-4 py-1 rounded-full font-medium hover:opacity-90 transition">
            Contacto
          </button>
          <button className="flex items-center border-2 border-[#7FFFFF] bg-black text-white px-3 py-1 rounded-full font-medium hover:bg-[#003366] hover:border-[#003366] hover:text-[#7FFFFF] transition">
            Área Cliente
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow w-full flex flex-col items-center justify-center p-6">
        <div className="flex-grow w-full flex flex-col items-start justify-start p-6">
          <h1 className="text-gray text-5xl md:text-6xl lg:text-7xl font-aileron font-semibold">
            Transporte
            <br />
            <span className="text-[#7FFFFF]">Inernacional</span>
            <br />
            <span className="text-black">de Mercancías</span>
          </h1>
        </div>
        <h2 className="text-4xl font-bold text-center text-gray-700 mb-4">
          ¡Calcula tus presupuestos de envío al instante!
        </h2>
        <p className="text-lg text-center mb-6">
          Usa nuestro nuevo chat inteligente para obtener presupuestos rápidos y precisos. ¡Solo empieza a chatear y obtén tu presupuesto en segundos!
        </p>
        <button
          className="bg-[#7FFFFF] text-black px-6 py-3 rounded-lg shadow-md">
          ¡Empieza a chatear ahora!
        </button>
        {/* Planes */}
        <div>
          <h1 className="mantine-Text-root mantine-Title-root text-3xl text-center font-bold mb-8 text-darkBlue mt-16 mantine-166d07m">
            Planes
          </h1>
          <div className="manstine-Container-root max-w-6xl mx-auto px-4 mantine-d9zk78">
            <div className="mantine-Grid-root mantine-16fdnqw flex justify-center space-x-4">
              <div className="mantine-Grid-col mantine-qjx5ze">
                <div className="mantine-Paper-root mantine-Card-root shadow-md p-4 rounded-md border hover:shadow-2xl mantine-othpma"></div>
              </div>
              <div className="mantine-Grid-col mantine-qjx5ze">
                <div className="mantine-Paper-root mantine-Card-root shadow-md p-4 rounded-md border hover:shadow-2xl mantine-othpma"></div>
              </div>
              <div className="mantine-Grid-col mantine-qjx5ze">
                <div className="mantine-Paper-root mantine-Card-root shadow-md p-4 rounded-md border hover:shadow-2xl mantine-othpma"></div>
              </div>
            </div>
          </div>
        </div>
      </main>


      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 w-full">
        <div className="m-auto max-w-7xl flex flex-col md:flex-row px-4 py-8 justify-between md:space-x-4 space-y-10 md:space-y-0">
          <div className="flex-1 pl-2">
            <h3 className="font-bold text-lg">Compañía</h3>
            <ul className="mt-4">
              <li><a href="#" className="text-sm">Instant Rate</a></li>
              <li><a href="https://www.envioxenvio.es/servicios" className="text-sm">Servicios</a></li>
              <li><a href="https://www.envioxenvio.es/blog" className="text-sm">Blog</a></li>
            </ul>
          </div>
          <div className="flex-1 pl-2">
            <h3 className="font-bold text-lg">Contacto</h3>
            <ul className="mt-4">
              <li>
                <a className="text-sm underline">Oficinas centrales</a></li>
              <li>
                <p className="text-sm">Calle Marina 16-18, Planta 27 08005 - Barcelona</p>
              </li>
              <li><a href="tel:+34936678296" className="text-sm">Tel: +34 936 678 296</a></li>
              <li><a href="mailto:info@envioxenvio.es" className="text-sm">Email: info@envioxenvio.es</a></li>
            </ul>
          </div>
          <div className="flex-1 pl-2">
            <h3 className="font-bold text-lg">Apartado Legal</h3>
            <ul className="mt-4">
              <li><a href="#" className="text-sm">Legal</a></li>
              <li><a href="#" className="text-sm">Condiciones de Contratación</a></li>
            </ul>
          </div>
        </div>
      </footer>


    </div>
  );
}
