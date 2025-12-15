import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Search from '@/components/shared/Search';
import { getAllEvents } from '@/lib/services/event.service';

interface HomeProps {
  searchParams: {
    query?: string;
    tipo?: 'GRATUITO' | 'PAGO';
  };
}

export default async function Home({ searchParams }: HomeProps) {
  const events = await getAllEvents({
    query: searchParams.query,
    tipo: searchParams.tipo,
  });

  return (
    <>
      {/* 🔹 HERO SECTION */}
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">
              Os melhores eventos estão aqui!
            </h1>

            <p className="p-regular-20 md:p-regular-24">
              Crie novos eventos e compartilhe conhecimentos úteis com nossa comunidade global.
            </p>

            <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href="#events">
                Explore Agora
              </Link>
            </Button>
          </div>

          <Image
            src="/images/hero.png"
            alt="hero"
            width={1000}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
          />
        </div>
      </section>

      {/* 🔹 EVENTS SECTION */}
      <section
        id="events"
        className="wrapper my-8 flex flex-col gap-8 md:gap-12"
      >
        <h2 className="h2-bold">
          Certificado Por <br /> Milhares de Usuários
        </h2>

        {/* 🔍 SEARCH */}
        <Search />

        {/* 📦 LISTA DE EVENTOS */}
        {events.length === 0 ? (
          <p className="text-muted-foreground">
            Nenhum evento encontrado.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {events.map((event: any) => (
              <div
                key={event.id}
                className="rounded-xl border bg-white shadow-sm overflow-hidden"
              >
                <Image
                  src={event.bannerUrl}
                  alt={event.titulo}
                  width={400}
                  height={200}
                  className="h-48 w-full object-cover"
                />

                <div className="p-4 space-y-2">
                  <h3 className="font-bold text-lg">{event.titulo}</h3>

                  <p className="text-sm text-gray-600">
                    Organizador: {event.organizador.nome}
                  </p>

                  <span className="text-xs px-2 py-1 rounded bg-gray-100">
                    {event.status}
                  </span>

                  <p className="font-bold text-primary">
                    {event.tipo === 'GRATUITO'
                      ? 'Gratuito'
                      : `R$ ${event.preco.toFixed(2)}`}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
