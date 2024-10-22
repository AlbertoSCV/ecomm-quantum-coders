import React from 'react';

interface HeaderWithIconProps {
  title: string;
  icon: React.ReactNode;
}

const HeaderWithIcon: React.FC<HeaderWithIconProps> = ({ title, icon }) => {
  return (
    <h1 className='text-3xl font-bold flex flex-row justi items-center'>
      {title} 
      {icon}
    </h1>
  );
};

export default HeaderWithIcon;
