'use client';
import React, { useEffect } from 'react';
import Login from './components/Login';

const handleLoginSubmit = (id: string) => {
  console.log('ID:', id);
  localStorage.setItem('session', JSON.stringify({ id }));
  window.location.href = '/e-comm';
};

const LoginPage = () => {
  useEffect(() => {
    const session = localStorage.getItem("session");
    if(session){
      window.location.href = '/e-comm';
    }
  }, []);

  return (
    <div className='bg-white'>
      <Login onSubmit={handleLoginSubmit}/>
    </div>
  );
};

export default LoginPage;
