'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import CommerceCarousel from './components/CommerceCarousel';
import Checkbox from './components/Checkbox';
import CommerceNavbar from './components/CommerceNavbar';

const Commerce = () => {
  const [sponsoredFunds, setSponsoredFunds] = useState([]);
  const [recentFunds, setRecentFunds] = useState([]);
  const [popularFunds, setPopularFunds] = useState([]);
  const [matureFunds, setMatureFunds] = useState([]);
  const [featuredFunds, setFeaturedFunds] = useState([]);


  // Función para agrupar los fondos en grupos de "n" (en este caso, 3)
  const groupDataInSlides = (data, itemsPerSlide = 3) => {
    const groupedSlides = [];
    for (let i = 0; i < data.length; i += itemsPerSlide) {
      groupedSlides.push(data.slice(i, i + itemsPerSlide));
    }
    return groupedSlides;
  };

  useEffect(() => {
    const session = localStorage.getItem('session');
    if (!session) {
      window.location.href = '/login';
    }

    const fetchData = async () => {
      try {
        // Accediendo al archivo JSON en la carpeta 'public'
        const response = await fetch('/data/funds.json');
        const data = await response.json();

        // Filtrando los datos según las etiquetas (tags)
        const sponsored = data.openFunds.filter(fund => fund.tags.includes('sponsored'));
        const recent = data.openFunds.filter(fund => fund.tags.includes('recent'));
        const popular = data.openFunds.filter(fund => fund.tags.includes('popular'));
        const mature = data.openFunds.filter(fund => fund.tags.includes('mature'));
        const featured = data.openFunds.filter(fund => fund.tags.includes('featured'));

        // Agrupar los fondos en grupos de 3 para cada categoría
        setSponsoredFunds(groupDataInSlides(sponsored));
        setRecentFunds(groupDataInSlides(recent));
        setPopularFunds(groupDataInSlides(popular));
        setMatureFunds(groupDataInSlides(mature));
        setFeaturedFunds(groupDataInSlides(featured));
      } catch (error) {
        console.error("Error al cargar los datos", error);
      }
    };

    fetchData();
  }, []);

  

  // Crear un array con las configuraciones de cada carousel
  const carouselSections = [
    {
      title: 'Patrocinados',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-orange-400 ml-2">
          <path
            fillRule="evenodd"
            d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z"
            clipRule="evenodd"
          />
        </svg>
      ),
      data: sponsoredFunds,
      tag: 'sponsor'
    },
    {
      title: 'Populares',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-orange-600 ml-2 mt-1">
          <path fillRule="evenodd" d="M12.963 2.286a.75.75 0 0 0-1.071-.136 9.742 9.742 0 0 0-3.539 6.176 7.547 7.547 0 0 1-1.705-1.715.75.75 0 0 0-1.152-.082A9 9 0 1 0 15.68 4.534a7.46 7.46 0 0 1-2.717-2.248ZM15.75 14.25a3.75 3.75 0 1 1-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 0 1 1.925-3.546 3.75 3.75 0 0 1 3.255 3.718Z" clipRule="evenodd" />
        </svg>
      ),
      data: featuredFunds,
      tag: 'featured'
    },
    {
      title: 'Recientes',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-slate-500 ml-2">
          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clipRule="evenodd" />
        </svg>
      ),
      data: recentFunds,
      tag: 'recent'
    },
    {
      title: 'Mayor Rendimiento',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-green-600 ml-2 mt-1">
          <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 0 1-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004ZM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 0 1-.921.42Z" />
          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v.816a3.836 3.836 0 0 0-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 0 1-.921-.421l-.879-.66a.75.75 0 0 0-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 0 0 1.5 0v-.81a4.124 4.124 0 0 0 1.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 0 0-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 0 0 .933-1.175l-.415-.33a3.836 3.836 0 0 0-1.719-.755V6Z" clipRule="evenodd" />
        </svg>
      ),
      data: popularFunds,
      tag: 'popular'
    },
    {
      title: 'Próximos a Cosecha',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-orange-600 ml-2 mt-1">
          <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
          <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clipRule="evenodd" />
        </svg>
      ),
      data: matureFunds,
      tag: 'mature'
    },
  ];

  return (
    <div>
      <CommerceNavbar>
        <div className="flex flex-col justify-center items-center">
            {carouselSections.map((section, idx) => (
              <CommerceCarousel
                key={idx}
                title={section.title}
                icon={section.icon}
                slides={section.data}
                tagKey={idx}
              />
            ))}
          </div>
      </CommerceNavbar>
    </div>
  );
};

export default Commerce;

