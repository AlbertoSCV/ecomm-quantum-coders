import React from 'react';
import TeamMemberCard from './components/TeamMemberCard';

const UsPage = () => {
  return (
    <div className="flex flex-col items-center h-full p-8 space-y-8">
      <div className='flex flex-row '>
        <h1 className="text-4xl font-bold text-center">
          Equipo{' '}
          <span className="bg-gradient-to-r from-purple-400 to-purple-800 bg-clip-text text-transparent">
            QuantumCoders
          </span>
        </h1>
      </div>
      <div className="flex flex-col relative lg:flex-row lg:space-x-8 space-y-8 lg:space-y-0 justify-center h-full">
        <TeamMemberCard
          name="Emilio Somoza"
          education="Estudiante de Licenciatura en Ingeniería en Sistemas y Computación"
          experience="Practica Profesional en Copa Airlines, +1 año en soporte técnico, Freelancer"
          skills="Backend, Arquitecto de Bases de Datos, Dominio en multiples lenguajes de programación."
          imageSrc="/images/emilio.jpeg"
          altText="Imagen de Emilio Somoza"
          gitUrl='/'
          linkedinUrl='/'
          cvUrl='/cv/cv_alberto_somoza'
        />

        <TeamMemberCard
          name="Gabriel Sanson"
          education="Estudiante de Licenciatura en Ingeniería en Sistemas y Computación"
          experience="Administrador de infraestructura en la nube (AWS IAM, Azure Active Directory y Google Cloud Identity)."
          skills="FrontEnd, Conocimiento de Sistemas de Gestión de Bases de Datos (DBMS)."
          imageSrc="/images/gabriel.jpeg"
          altText="Imagen de Gabriel Sanson"
          gitUrl='/'
          linkedinUrl='/'
          cvUrl='/cv/cv_alberto_somoza'
        />

        <TeamMemberCard
          name="Alberto Somoza"
          education="Estudiante de Licenciatura en Ingeniería en Sistemas y Computación"
          experience="Practicante como desarrollador Desktop, Web y soluciones en la nube en Copa Airlines, Soporte Técnico."
          skills="Diversos lenguajes de programación, base de datos SQL como No-SQL, Desarrollo FullStack en Next.js."
          imageSrc="/images/alberto.jpg"
          altText="Imagen de Alberto Somoza"
          gitUrl='https://github.com/AlbertoSCV/'
          linkedinUrl='https://www.linkedin.com/in/alberto-somoza-17781a264/'
          cvUrl = '/cv/cv_alberto_somoza.pdf'
        />
      </div>
    </div>
  );
};

export default UsPage;
