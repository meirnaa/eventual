'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import { upsertUser } from '@/lib/services/user.service';

const OnboardingPage = () => {
  const { user } = useUser();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [nome, setNome] = useState(user?.firstName || '');
  const [cidade, setCidade] = useState('');
  const [visibilidade, setVisibilidade] = useState(true);

  const handleSubmit = async () => {
    if (!user) return;

    const storedRole = localStorage.getItem('signupRole');
    const role = storedRole === 'ORGANIZER' ? 'ORGANIZER' : 'USER';

    setLoading(true);

    try {
      await upsertUser({
        id: user.id,
        nome: nome || 'Usuário',
        email: user.emailAddresses[0].emailAddress,
        cidade: cidade || null,
        fotoUrl: user.imageUrl || null,
        visibilidadeParticipacao: visibilidade,
        ratingOrganizador: 0,
        role,
        senhaHash: 'clerk-login',
      });

      if (role === 'ORGANIZER') {
        router.push('/organizer');
      } else {
        router.push('/user');
      }

      localStorage.removeItem('signupRole');
    } catch (error) {
      console.error('Erro no onboarding:', error);
    } finally {
      setLoading(false);
    }
  };

  if (!user) return <p className="text-marromEscuro">Carregando...</p>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <h1 className="text-2xl font-bold text-marromEscuro mb-6">
        Finalize seu cadastro
      </h1>

      <div className="flex flex-col gap-4 w-full max-w-md">
        <input
          type="text"
          placeholder="Nome completo"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="border p-2 rounded"
        />

        <input
          type="text"
          placeholder="Cidade"
          value={cidade}
          onChange={(e) => setCidade(e.target.value)}
          className="border p-2 rounded"
        />

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={visibilidade}
            onChange={(e) => setVisibilidade(e.target.checked)}
          />
          Mostrar minha participação publicamente
        </label>

        <Button onClick={handleSubmit} disabled={loading} className="mt-4">
          {loading ? 'Salvando...' : 'Concluir cadastro'}
        </Button>
      </div>
    </div>
  );
};

export default OnboardingPage;
