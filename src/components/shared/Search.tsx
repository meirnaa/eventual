'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function Search() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [query, setQuery] = useState(searchParams.get('query') || '');
  const [tipo, setTipo] = useState(searchParams.get('tipo') || '');

  const handleSearch = () => {
    const params = new URLSearchParams();

    if (query) params.set('query', query);
    if (tipo) params.set('tipo', tipo);

    router.push(`/?${params.toString()}`);
  };

  return (
    <div className="flex gap-4 w-full">
      <input
        className="border p-2 rounded w-full"
        placeholder="Buscar eventos"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <select
        className="border p-2 rounded"
        value={tipo}
        onChange={(e) => setTipo(e.target.value)}
      >
        <option value="">Todos</option>
        <option value="GRATUITO">Gratuito</option>
        <option value="PAGO">Pago</option>
      </select>

      <button
        onClick={handleSearch}
        className="bg-primary text-white px-4 rounded"
      >
        Buscar
      </button>
    </div>
  );
}
