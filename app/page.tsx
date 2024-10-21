'use client';  // Esto asegura que se renderice en el lado del cliente

import React from 'react';
import Link from 'next/link';
import Image from "next/image";

const Home: React.FC = () => {
  return (
    <div className="bg-black relative flex flex-col items-center">
      {/* Imagen de fondo en la parte superior */}
      <div className="relative w-full h-96"> {/* Ajusta la altura según lo necesites */}
        <Image 
          src="/images/home-bg.jpg" // Cambia esta ruta a tu imagen de fondo
          alt="Background"
          layout="fill" // Para cubrir todo el contenedor
          objectFit="cover" // Para que mantenga la proporción
          priority // Para que cargue primero
          className='opacity-55'
        />
      </div>

      {/* Sección principal */}
      <div className="relative z-10 flex flex-col items-center text-white text-center justify-center py-12">
        <h1 className="text-6xl font-bold mb-4">Bienvenido a AgroRed</h1>
        <p className="text-xl mb-8">
          Facilitamos la comunicación efectiva y directa entre los compradores finales y los profesionales de la agroindustria, promoviendo la transparencia, eficiencia y sostenibilidad en el mercado agroalimentario.
        </p>
        <Link href="/login">
          <button className="text-white font-semibold bg-gradient-to-r from-purple-400 to-purple-800 px-6 py-3 rounded-xl">
            Iniciar Sesión
          </button>
        </Link>
        <div className="mt-8">
          <Link href="/us" className="text-lg underline hover:text-purple-400">Nosotros</Link>
          <Link href="/e-comm" className="ml-4 text-lg underline hover:text-purple-400">E-Commerce</Link>
        </div>
      </div>

      {/* Espacio en blanco */}
      <div className="bg-base-200 w-3/4 h-40 mx-auto mt-0 rounded-lg shadow-md"></div>

      {/* Sección de imagen y texto */}
      <div className="flex flex-col md:flex-row w-3/4 mt-8 mb-8 justify-center items-center">
        <div className="flex-1 md:mr-4">
          <Image 
            src="/images/alberto.jpeg" // Cambia esta ruta a tu imagen
            alt="Box Office News"
            layout="responsive"
            width={500} // Ajusta según tus necesidades
            height={300} // Ajusta según tus necesidades
            className="rounded-lg shadow-2xl"
          />
        </div>
        <div className="flex-1 text-black text-lg mt-4 md:mt-0">
          <h2 className="text-3xl font-bold mb-2">Box Office News!</h2>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>

      {/* Pie de página */}
      <footer className="mt-auto footer footer-center bg-black text-primary-content p-6">
        <aside>
          <p className="font-bold">
            AgroRed by QuantumCoders
          </p>
          <p>Copyright © {new Date().getFullYear()} - All rights reserved</p>
        </aside>
      </footer>
    </div>
  );
};

export default Home;

