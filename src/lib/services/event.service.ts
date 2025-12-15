export interface GetEventsParams {
  query?: string;
  tipo?: 'GRATUITO' | 'PAGO';
}

export async function getAllEvents(params: GetEventsParams) {
  const search = new URLSearchParams();

  if (params.query) search.set('query', params.query);
  if (params.tipo) search.set('tipo', params.tipo);

  const res = await fetch(`http://localhost:3000/events?${search.toString()}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Erro ao buscar eventos');
  }

  return res.json();
}
