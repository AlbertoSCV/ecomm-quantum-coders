import Link from 'next/link'
import React from 'react'

interface Props{
  isMobile: boolean
}

const NavbarMenu: React.FC<Props> = ({isMobile}) => {
  return (
    <div>
        <ul className={`menu ${isMobile ? "menu-vertical p-4 space-y-4" : "menu-horizontal px-1 space-x-4"}`}>
          <li>
            <Link href="/" className="text-lg">Inicio</Link>
          </li>
          <li>
            <Link href="/e-comm" className="text-lg">E-Commerce</Link>
          </li>
          <li>
            <Link href="/us" className="text-lg">Nosotros</Link>
          </li>
        </ul>
    </div>
  )
}

export default NavbarMenu