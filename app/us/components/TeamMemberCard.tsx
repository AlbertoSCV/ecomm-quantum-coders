import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import Github from './Github';
import Linkedin from './Linkedin';

interface TeamMemberCardProps {
  name: string;
  education: string;
  experience: string;
  skills: string;
  imageSrc: string;
  altText: string;
  gitUrl: string;
  linkedinUrl: string;
  cvUrl: string
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ name, education, experience, skills, imageSrc, altText, gitUrl, linkedinUrl, cvUrl }) => {
  return (
    <div className="w-full h-full relative max-w-xl card bg-white text-neutral-800 shadow-xl flex flex-col">
      <div className="card-body flex flex-col items-center h-full space-y-4">
        <Image
          src={imageSrc}
          alt={altText}
          height={150}
          width={150}
          className="rounded-full"
        />
        <div className='w-full h-full flex flex-row justify-end items-end mr-12'>
          <Github src={gitUrl}/>
          <Linkedin src={linkedinUrl}/>
        </div>
        <div className="flex-grow">
          <p className="text-lg"><span className="font-bold">Nombre:</span> {name}</p>
          <p className="text-lg"><span className="font-bold">Educación:</span> {education}</p>
          <p className="text-lg"><span className="font-bold">Experiencia:</span> {experience}</p>
          <p className="text-lg"><span className="font-bold">Habilidades:</span> {skills}</p>
        </div>
        <div className='flex flex-row w-full h-full justify-end items-end'>
          <Link href={cvUrl}>
            <button className='text-white font-semibold bg-gradient-to-r from-purple-400 to-purple-800 px-6 py-2 rounded-full'>
              Hoja de Vida
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
