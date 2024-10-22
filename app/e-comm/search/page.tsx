'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Card from '../components/Card';
import CommerceNavbar from '../components/CommerceNavbar';

interface Fund {
  id: number;
  productor: string;
  name: string;
  description: string;
  province: string;
  totalAmount: number;
  raisedAmount: number;
  investors: number;
  tags: string[];
  imageUrl: string;
}

const SearchPage = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get('query');
  const [funds, setFunds] = useState<Fund[]>([]);
  const [filteredFunds, setFilteredFunds] = useState<Fund[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/funds.json');
        const data = await response.json();
        setFunds(data.openFunds); // Cargar todos los fondos
      } catch (error) {
        console.error('Error al cargar los fondos:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (query && funds.length > 0) {
      const results = funds.filter((fund) =>
        fund.name.toLowerCase().includes(query.toLowerCase()) ||
        fund.description.toLowerCase().includes(query.toLowerCase())
      );
      console.log(results)
      setFilteredFunds(results);
    }
  }, [query, funds]);

  return (
    <div>
        <CommerceNavbar>
            <div className="flex flex-wrap justify-center gap-4">
            {filteredFunds.length > 0 ? (
                filteredFunds.map((card, idx) => (
                <Card
                    key={idx}
                    id={card.id}
                    name={card.name}
                    description={card.description}
                    investors={card.investors}
                    totalAmount={card.totalAmount}
                    raisedAmount={card.raisedAmount}
                    imageUrl={card.imageUrl}
                    tags={card.tags}
                />
                ))
                ) : (
                <p>No se encontraron resultados.</p>
                )}
            </div>
        </CommerceNavbar>
    </div>
  );
};

export default SearchPage;
