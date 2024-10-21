// components/TeamMemberCard.tsx
import React from 'react';
import Image from 'next/image';

interface TeamMemberCardProps {
  name: string;
  education: string;
  experience: string;
  skills: string;
  imageSrc: string;
  altText: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ name, education, experience, skills, imageSrc, altText }) => {
  return (
    <div className="w-full max-w-xl card bg-white text-neutral-800 shadow-xl flex flex-col h-full">
      <div className="card-body flex flex-col items-center space-y-4 h-full">
        <Image
          src={imageSrc}
          alt={altText}
          height={150}
          width={150}
          className="rounded-full"
        />
        <div className="flex-grow">
          <p className="text-lg"><span className="font-bold">Nombre:</span> {name}</p>
          <p className="text-lg"><span className="font-bold">Educación:</span> {education}</p>
          <p className="text-lg"><span className="font-bold">Experiencia:</span> {experience}</p>
          <p className="text-lg"><span className="font-bold">Habilidades:</span> {skills}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
