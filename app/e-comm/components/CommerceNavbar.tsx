'use client'
import React, {FormEvent, useState} from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Checkbox from './Checkbox';

interface Props{
    children: React.ReactNode
}

const CommerceNavbar: React.FC<Props> = ({children}) => {
    const handleLogout = () => {
        localStorage.removeItem('session');
        window.location.href = '/';
      };

  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (searchTerm) {
      router.push(`/e-comm/search?query=${searchTerm}`);
    }
  };
  return (
    <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content m-4 mx-8">
          <div className="flex flex-row justify-between items-center">
            <label htmlFor="my-drawer" className="drawer-button hover:cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 text-slate-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </label>
            <div className="flex flex-row items-center">
              <form onSubmit={handleSearch} className="flex flex-row items-center">
                <div className="form-control">
                  <input type="text" placeholder="Busca proyectos..." onChange={(e) => setSearchTerm(e.target.value)} className="input input-bordered w-24 md:w-[32rem]" />
                </div>
                <button type='submit'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-slate-400 ml-4 hover:cursor-pointer" >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
                </button>
              </form>
            </div>
            <div className="flex flex-row items-center">
              <Link href="/e-comm/investments">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-slate-400 mr-4 hover:cursor-pointer">
                    <path d="M2.273 5.625A4.483 4.483 0 0 1 5.25 4.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 3H5.25a3 3 0 0 0-2.977 2.625ZM2.273 8.625A4.483 4.483 0 0 1 5.25 7.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 6H5.25a3 3 0 0 0-2.977 2.625ZM5.25 9a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h13.5a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3H15a.75.75 0 0 0-.75.75 2.25 2.25 0 0 1-4.5 0A.75.75 0 0 0 9 9H5.25Z" />
                </svg>
              </Link>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="hover:cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 text-slate-400" >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                  </svg>
                </label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                  <li>
                    <button onClick={handleLogout} className="btn btn-error btn-sm text-white">
                      Cerrar sesión
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {children}
        </div>
        <div className="drawer-side mt-[90px]">
          <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          <h2 className='font-semibold text-lg'>Filtros</h2>
            <li className='provincia'><a>Provincia</a></li>
              <div className="ml-4 mt-2">
                <div className='flex flex-col'>
                  <Checkbox title='Panamá'/>
                  <Checkbox title='Panamá Oeste'/>
                  <Checkbox title='Colón'/>
                  <Checkbox title='Darén'/>
                  <Checkbox title='Coclé'/>
                  <Checkbox title='Veraguas'/>
                  <Checkbox title='Bocas del Toro'/>
                  <Checkbox title='Herrera'/>
                  <Checkbox title='Los Santos'/>
                  <Checkbox title='Chiriquí'/>
                </div>
              </div>
            
            <li className='rango-de-precio'><a>Rango de precio</a></li>
            <input type="range" min={0} max="100" defaultValue="25" className="range" step="25" />
            <div className="flex w-full justify-between px-2 text-xs">
              <span>|</span>
              <span>|</span>
              <span>|</span>
              <span>|</span>
              <span>|</span>
            </div>
            <li className='metodo-de-producción'><a>Método de producción</a></li>
            <li className=''><a>Estado de Proyecto</a></li>
          </ul>
        </div>
      </div>
  )
}

export default CommerceNavbar