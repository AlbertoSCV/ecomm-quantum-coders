'use client';
import React from 'react';
import Link from 'next/link';
import Image from "next/image";

const Home: React.FC = () => {
  return (
    <div className="bg-black relative flex flex-col items-center">
      <div className="relative w-full h-96">
        <Image 
          src="/images/home-bg.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          priority
          className='opacity-55'
        />
      </div>
      <div className="bg-base-200 w-100 h-100 mx-auto mt-0 shadow-md w-full"> 
        <div className="relative z-10 flex flex-col items-center text-white text-center justify-center py-12">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-purple-800 bg-clip-text text-transparent mb-2 pb-1">Bienvenido a AgroRed</h1>
          <p className="text-xl text-black mb-8 mt-2">
            Facilitamos la comunicación efectiva y directa entre los inversores y los profesionales de la agroindustria, promoviendo la transparencia, eficiencia y sostenibilidad en el mercado agroalimentario.
          </p>
          <Link href="/e-comm">
            <button className="text-white font-semibold bg-gradient-to-r from-purple-400 to-purple-800 px-6 py-3 rounded-xl">
              Empieza a invertir
            </button>
          </Link>
        </div>
      </div>
      <div className="bg-base-100 w-200 h-100 mx-auto mt-0 shadow-md bg-gradient-to-r from-purple-400 to-purple-800 w-full">
          <div className="flex flex-col md:flex-row w-11/12 mt-8 mb-8 justify-center items-center text-justify">
          <div className="flex-1 ps-10 md:ml-auto md:mr-25">
            <Image 
              src="/images/agro.jpeg"
              alt="Foto de objetivos."
              layout="fixed"
              width={500}
              height={300}
              className="rounded-lg shadow-2xl"
            />
          </div>
          <div className="flex-1 text-black text-lg mt-4 ps-50 md:mt-0 w-full">
            <h2 className="text-3xl font-bold mb-2 text-white">Conoce nuestro propósito!</h2>
            <p className="py-6 text-white w-full">
            A través de nuestra plataforma, los productores pueden ofrecer proyectos agrícolas donde los consumidores invierten directamente en sus cultivos. 
            Esto no solo permite a los agricultores financiar sus operaciones de manera más eficiente, sino que también proporciona a los inversores la oportunidad 
            de participar activamente en el desarrollo de la agricultura sostenible.
            </p>
            <Link href={"/us"}>
              <button className="bg-white py-2 px-8 rounded-full text-black">Nosotros</button>
            </Link>
          </div>
        </div>
      </div>
      <footer className="mt-auto footer footer-center bg-white p-6">
      <aside>
        <Image
          src="/images/logo.jpeg"
          alt="Logo QuantumCoders"
          layout="fixed"
          width={50}
          height={50}
          className="rounded-lg shadow-2xl"
        />
          <p className="font-bold">
            AgroRed by QuantumCoders
          </p>
          <p className='font-bold '>Copyright © {new Date().getFullYear()} - All rights reserved</p>
        </aside>
      </footer>
    </div>
  );
};

export default Home;

