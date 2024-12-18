import Image from "next/image";
import ChatBar from "./components/ChatBar";
import styles from "./components/Home.module.css";
import { useState } from "react";
import PlanCard from "./components/PlanCard";
import BenefitsCards from "./components/BenefitsCards";

export default function Home() {
  // Estat per controlar la visibilitat del chat
  const [isChatVisible, setIsChatVisible] = useState(false);
  // Funció per mostrar el chat
  const toggleChat = () => {
    setIsChatVisible((prevState) => !prevState); // Alternar visibilitat
  };
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
      <main className="flex-grow w-full flex flex-col items-center justify-center">
        {/* Video de fondo */}
        <section className="relative w-full max-w-none h-[500px] flex items-center justify-center overflow-hidden mb-10">

          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="./video.m4v"
            autoPlay
            loop
            muted
            playsInline
          ></video>
          <div className="absolute inset-0 bg-black opacity-30 z-10"></div>


          {/* Contingut principal */}
          <div className="relative z-20 px flex-grow w-full flex flex-col items-start justify-start p-6">
            <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-aileron font-semibold">
              Transporte
              <br />
              <span className="text-[#7FFFFF]">Inernacional</span>
              <br />
              <span className="text-white">de Mercancías</span>
            </h1>
          </div>

          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '5rem' }}></div>
        </section>
        <h2 className={styles.customTitle}>
          ¡Conoce a tu nuevo{' '}
          <span className={styles.highlight}>Asistente Inteligente</span>
        </h2>

        <p className="text-lg text-center mb-6">
          Resuelve tus dudas, encuentra soluciones rápidas y obtén ayuda
          instantánea con nuestro chat impulsado por IA.
        </p>

        {/* Button to Chat */}
        <button onClick={toggleChat} className={styles.ctaButton}>
          {isChatVisible ? "¡Habla con nuestro asistente ahora!" : "¡Habla con nuestro asistente ahora!"}
        </button>

        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem' }}></div>


        {/* ChatBot flotant dreta */}
        <div className={styles.home}>
          {/* Floating button*/}
          <div className={styles.floatingButton} onClick={toggleChat}>
            <Image
              src="/logoX.svg"
              alt="Chat Icon"
              width={40}
              height={40}
            />
            <span>{isChatVisible ? "Cerrar chat" : "¿Necesitas ayuda?"}</span>
          </div>
          {/* Renderitzar ChatBar si està visible */}
          {isChatVisible && (
            <>
              <div className={styles.overlay} onClick={toggleChat}></div>
              <div className={styles.chatContainer}>
                <ChatBar />
              </div>
            </>
          )}
        </div>
        {/* Benefits */}
        <BenefitsCards />
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}></div>

        {/* Planes */}
        <PlanCard />
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '5rem' }}></div>







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
