// app/e-comm/search/page.tsx
'use client';

import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
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

function SearchClient() {
  const searchParams = useSearchParams();
  const query = (searchParams.get('query') || '').toLowerCase();

  const [funds, setFunds] = useState<Fund[]>([]);
  const [filteredFunds, setFilteredFunds] = useState<Fund[]>([]);

  useEffect(() => {
    (async () => {
      const res = await fetch('/data/funds.json');
      const data = await res.json();
      setFunds(data.openFunds ?? []);
    })();
  }, []);

  useEffect(() => {
    if (!query) {
      setFilteredFunds([]);
      return;
    }
    setFilteredFunds(
      funds.filter(
        f =>
          f.name.toLowerCase().includes(query) ||
          f.description.toLowerCase().includes(query)
      )
    );
  }, [query, funds]);

  return (
    <CommerceNavbar>
      <div className="flex flex-wrap justify-center gap-4">
        {query && filteredFunds.length > 0 ? (
          filteredFunds.map((card) => (
            <Card key={card.id} {...card} />
          ))
        ) : (
          <p>{query ? 'No se encontraron resultados.' : 'Escribe tu búsqueda.'}</p>
        )}
      </div>
    </CommerceNavbar>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<CommerceNavbar>Loading...</CommerceNavbar>}>
      <SearchClient />
    </Suspense>
  );
}