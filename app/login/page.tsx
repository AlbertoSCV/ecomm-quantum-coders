'use client';
import React from 'react';
import Login from './components/Login';

const handleLoginSubmit = (account: string, password: string) => {
  console.log('Account:', account);
  console.log('Password:', password);
};

const LoginPage = () => {
  return (
    <div className='bg-white'>
      <Login onSubmit={handleLoginSubmit}/>
    </div>
  );
};

export default LoginPage;
