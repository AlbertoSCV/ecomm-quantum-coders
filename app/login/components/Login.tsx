'use client';  // Esto asegura que se renderice en el lado del cliente

import React from 'react';
import Link from 'next/link';

interface Props {
  onSubmit: (account: string, password: string) => void;
}

const Login: React.FC<Props> = ({ }) => {
  return (
    <div 
      className="hero bg-white min-h-[calc(100vh-92px)] flex justify-center items-center" 
      style={{
        backgroundImage: "url('/images/login_bg.jpg')", // Cambia la ruta a tu imagen
        backgroundSize: 'cover', // Cubre todo el contenedor
        backgroundPosition: 'center', // Centra la imagen
      }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl lg:mr-12">
          <form className="card-body">
          <div className="text-center">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-700 to-purple-400 bg-clip-text text-transparent">
              AgroRed
            </h1>
          </div>
            <div className="form-control">
              <label className="label">
                <span className="text-purple-700 text-lg label-text">Email</span>
              </label>
              <input type="email" placeholder="Ingresa tu Email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-purple-700 text-lg label-text">Password</span>
              </label>
              <input type="password" placeholder="Ingresa tu contraseña" className="input input-bordered" required />
              <label className="label">
                <Link href="#" className="label-text-alt link link-hover text-purple-700 hover:text-purple-500">
                  ¿Olvidaste tu contraseña?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn text-white bg-gradient-to-r from-purple-400 to-purple-800">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

