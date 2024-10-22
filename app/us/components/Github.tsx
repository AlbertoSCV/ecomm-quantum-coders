import React from 'react'
import Link from 'next/link'
import { BsGithub } from 'react-icons/bs';

interface Props{
    src: string
}

const Github: React.FC<Props> = ({src}) => {
  return (
    <Link href={src} className='ml-4'>
        <BsGithub className='size-6'/>
    </Link>
  )
}

export default Github