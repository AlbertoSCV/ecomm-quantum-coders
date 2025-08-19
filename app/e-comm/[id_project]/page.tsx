'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import CommerceNavbar from '../components/CommerceNavbar';
import Image from 'next/image';
import { BsPaypal } from 'react-icons/bs';
import { SiVisa, SiMastercard, SiAmericanexpress } from 'react-icons/si';
import CommerceCarousel from '../components/CommerceCarousel';

interface Fund {
  id: number;
  productor: string;
  name: string;
  description: string;
  totalAmount: number;
  raisedAmount: number;
  investors: number;
  tags: string[];
  imageUrl: string; // always a string in valid data
}

const groupDataInSlides = (data: Fund[], itemsPerSlide = 3) => {
  const groupedSlides: Fund[][] = [];
  for (let i = 0; i < data.length; i += itemsPerSlide) {
    groupedSlides.push(data.slice(i, i + itemsPerSlide));
  }
  return groupedSlides;
};

export default function FundPage() {
  const { id_project } = useParams<{ id_project: string }>(); // typed: always string
  const [fund, setFund] = useState<Fund | null>(null);
  const [loading, setLoading] = useState(true);
  const [sponsoredFunds, setSponsoredFunds] = useState<Fund[][]>([]);
  const [popularFunds, setPopularFunds] = useState<Fund[][]>([]);

  useEffect(() => {
    if (!id_project) return;

    const fetchData = async () => {
      const response = await fetch('/data/funds.json');
      const data = await response.json();

      const fundId = parseInt(id_project, 10);

      const selectedFund: Fund | undefined = data.openFunds.find(
        (fondo: Fund) => fondo.id === fundId
      );
      const sponsored: Fund[] = data.openFunds.filter((f: Fund) =>
        f.tags.includes('sponsored')
      );
      const popular: Fund[] = data.openFunds.filter((f: Fund) =>
        f.tags.includes('popular')
      );

      setSponsoredFunds(groupDataInSlides(sponsored));
      setPopularFunds(groupDataInSlides(popular));
      setFund(selectedFund ?? null);
      setLoading(false);
    };

    fetchData();
  }, [id_project]);

  if (loading) {
    return <CommerceNavbar>Loading...</CommerceNavbar>;
  }

  // Guard: if the fund id doesn’t exist in the dataset
  if (!fund) {
    return (
      <CommerceNavbar>
        <div className="mt-12 text-center">
          <h2 className="text-xl font-semibold">Proyecto no encontrado</h2>
          <p className="text-slate-500">Verifica el enlace o vuelve al listado.</p>
        </div>
      </CommerceNavbar>
    );
  }

  const carouselSections = [
    {
      title: 'Patrocinados',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
             fill="currentColor" className="size-6 text-orange-400 ml-2">
          <path
            fillRule="evenodd"
            d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z"
            clipRule="evenodd"
          />
        </svg>
      ),
      data: sponsoredFunds,
      tag: 'sponsor',
    },
    {
      title: 'Populares',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
             fill="currentColor" className="size-6 text-orange-600 ml-2 mt-1">
          <path
            fillRule="evenodd"
            d="M12.963 2.286a.75.75 0 0 0-1.071-.136 9.742 9.742 0 0 0-3.539 6.176 7.547 7.547 0 0 1-1.705-1.715.75.75 0 0 0-1.152-.082A9 9 0 1 0 15.68 4.534a7.46 7.46 0 0 1-2.717-2.248ZM15.75 14.25a3.75 3.75 0 1 1-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 0 1 1.925-3.546 3.75 3.75 0 0 1 3.255 3.718Z"
            clipRule="evenodd"
          />
        </svg>
      ),
      data: popularFunds,
      tag: 'popular',
    },
  ];

  return (
    <div>
      <CommerceNavbar>
        <div className="card card-side bg-base-100 shadow-xl mt-12">
          <figure>
            {/* fund is narrowed above, so src is string (no union with undefined) */}
            <Image
              src={fund.imageUrl}
              alt={`Imagen de ${fund.name}`}
              height={200}
              width={200}
              className="w-96 h-96 object-cover"
              priority
            />
          </figure>
          <div className="card-body justify-between">
            <div className="flex flex-row justify-between">
              <div className="flex flex-col w-2/3">
                <h2 className="card-title mb-2">{fund.name}</h2>
                <span className="text-slate-500">por {fund.productor}</span>
                <div className="rating mb-12">
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" disabled />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" disabled />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" disabled />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" disabled />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked disabled />
                </div>
                <p className="mb-4">{fund.description}</p>
                <div className="flex flex-col items-end">
                  <span className="text-slate-400">
                    B/. {fund.raisedAmount} / B/. {fund.totalAmount}
                  </span>
                  <progress
                    className="progress progress-success w-full"
                    value={fund.raisedAmount}
                    max={fund.totalAmount}
                  />
                </div>
              </div>
              <div className="flex flex-col items-center justify-center w-1/3 px-12">
                <button className="rounded-full bg-yellow-500 text-white font-semibold w-full py-4 my-2">
                  <div className="flex flex-row items-center justify-center">
                    <BsPaypal className="mr-2 mt-1 size-6" />
                    Paypal
                  </div>
                </button>
                <button className="rounded-full bg-blue-600 text-white font-semibold w-full py-4 my-2">
                  <div className="flex flex-row items-center justify-center">
                    <SiVisa className="mr-2 mt-1 size-6" />
                    <SiMastercard className="mr-2 mt-1 size-6" />
                    <SiAmericanexpress className="mt-1 size-6" />
                  </div>
                </button>
              </div>
            </div>
            <div className="card-actions justify-end text-slate-400">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                   fill="currentColor" className="size-6">
                <path
                  fillRule="evenodd"
                  d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                  clipRule="evenodd"
                />
              </svg>
              {fund.investors}
            </div>
          </div>
        </div>

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
}