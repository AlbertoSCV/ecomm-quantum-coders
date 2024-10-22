import React from 'react';
import Image from 'next/image';

interface CardProps {
  id: string;
  name: string;
  description: string;
  investors: number;
  totalAmount: string;
  raisedAmount: number;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ id, name, description, investors, totalAmount, raisedAmount, imageUrl }) => {
  return (
    <div className="card card-compact h-full bg-base-100 md:w-48 lg:w-56 xl:w-72 2xl:w-96 shadow-xl my-8">
      <figure className='h-36'>
        <Image
          src={imageUrl}
          alt={name}
          width={500}
          height={500}
          className="rounded-t-lg"
        />
      </figure>
      <div className="card-body my-4">
        <h2 className="text-sm xl:text-lg 2xl:text-xl font-semibold">{name}</h2>
        <p>{description}</p>
        <div className="flex flex-row justify-between items-center">
          <progress className="progress progress-success w-32 2xl:w-52" value={raisedAmount} max={totalAmount}></progress>
          <span className="text-slate-400">B/.{raisedAmount + " "}/{" "}B/.{totalAmount}</span>
        </div>
        <div className="card-actions justify-between items-end">
          <span className="text-slate-400">{investors} inversores</span>
          <button className="p-2 px-4 rounded-full text-white font-semibold bg-gradient-to-r from-purple-600 to-purple-800 hover:bg-gradient-to-r hover:from-purple-400 hover:to-purple-600">¡Invierte!</button>
        </div>
      </div>
    </div>
  );
};

export default Card;