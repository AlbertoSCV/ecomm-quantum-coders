'use client';
import React, { useState } from 'react';
import Link from 'next/link';

interface Props {
  onSubmit: (id: string) => void;
}

const Login: React.FC<Props> = ({ onSubmit }) => {
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch('/data/users.json');
    const data = await response.json();
    const user = data.users.find((user: any) => user.username === account && user.password === password);

    if (user) {
      onSubmit(user.id);
    } else {
      setErrorMessage('Credenciales incorrectas');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 1000);
    }
  };

  return (
    <div 
      className="hero bg-white min-h-[calc(100vh-92px)] flex justify-center items-center" 
      style={{
        backgroundImage: "url('/images/login_bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl lg:mr-12">
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="text-center">
              <h1 className="text-3xl font-bold bg-black bg-clip-text text-transparent">
                AgroRed
              </h1>
            </div>
            <div className="form-control mt-8">
              <label className="label">
                <span className="text-black text-lg label-text">Nombre de Usuario</span>
              </label>
              <input 
                type="text" 
                placeholder="Ingresa tu Usuario" 
                className="input input-bordered" 
                value={account}
                onChange={(e) => setAccount(e.target.value)}
                required 
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-black text-lg label-text">Password</span>
              </label>
              <input 
                type="password" 
                placeholder="Ingresa tu contraseña" 
                className="input input-bordered" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
              />
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

      {showToast && (
        <div className="toast toast-middle toast-center">
          <div className="alert alert-error">
            <span>{errorMessage}</span>
          </div>
        </div>
      )}

    </div>
  );
};

export default Login;
