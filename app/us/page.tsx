// app/us/page.tsx
import React from 'react';
import TeamMemberCard from './components/TeamMemberCard';

const UsPage = () => {
  return (
    <div className="flex flex-col items-center p-8 space-y-8">
      <h1 className="text-4xl font-bold text-center">
        Equipo{' '}
        <span className="bg-gradient-to-r from-purple-400 to-purple-800 bg-clip-text text-transparent">
          QuantumCoders
        </span>
      </h1>

      <div className="flex flex-col lg:flex-row lg:space-x-8 space-y-8 lg:space-y-0 justify-center items-stretch h-full">
        <TeamMemberCard
          name="Emilio Somoza"
          education="Licenciado en Ingeniería en Sistemas y Computación"
          experience="Practica Profesional en Copa Airlines, +1 año en proyectos Freelance"
          skills="Backend, Arquitecto de Bases de Datos, Dominio en multiples lenguajes de programación"
          imageSrc="/images/emilio.jpeg"
          altText="Imagen de Emilio Somoza"
        />

        <TeamMemberCard
          name="Gabriel Sanson"
          education="Estudiante de Licenciatura en Ingeniería en Sistemas y Computación"
          experience=""
          skills=""
          imageSrc="/images/gabriel.jpeg"
          altText="Imagen de Gabriel Sanson"
        />

        <TeamMemberCard
          name="Alberto Somoza"
          education="Licenciado en Ingeniería en Sistemas y Computación"
          experience=""
          skills=""
          imageSrc="/images/alberto.jpeg"
          altText="Imagen de Alberto Somoza"
        />
      </div>
    </div>
  );
};

export default UsPage;
