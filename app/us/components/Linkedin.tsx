import React from 'react'
import Link from 'next/link'
import { BsLinkedin } from 'react-icons/bs'

interface Props{
    src: string
}

const Linkedin: React.FC<Props> = ({src}) => {
  return (
    <Link href={src} className='ml-4'>
        <BsLinkedin className='size-6'/>
    </Link>
  )
}

export default Linkedin