'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { User, Users } from 'lucide-react';

const ChooseRolePage = () => {
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState<'USER' | 'ORGANIZER' | null>(null);

  const handleContinue = () => {
    if (!selectedRole) return;
    localStorage.setItem('signupRole', selectedRole);
    router.push('/sign-up');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-12">
      {/* Título */}
      <h1 className="text-3xl md:text-4xl font-bold text-marromEscuro mb-4 text-center">
        Escolha seu papel
      </h1>

      {/* Descrição */}
      <p className="text-center text-marromEscuro/70 mb-8 max-w-xl text-sm md:text-base">
        Antes de criar sua conta, selecione se você deseja participar de eventos como <strong>Participante</strong> ou gerenciar seus próprios eventos como <strong>Organizador</strong>. Isso ajudará a personalizar sua experiência no Eventual.
      </p>

      {/* Cards de escolha */}
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-3xl">
        {/* Participante */}
        <div
          onClick={() => setSelectedRole('USER')}
          className={`flex flex-col items-center justify-center p-6 rounded-xl cursor-pointer transition-transform transform hover:scale-105 border ${
            selectedRole === 'USER'
              ? 'bg-laranjaForte text-white border-laranjaForte shadow-lg'
              : 'bg-laranjaPessego text-marromEscuro border-laranjaClaro hover:bg-laranjaClaro'
          } flex-1`}
        >
          <User size={40} className="mb-4" />
          <h2 className="text-xl font-semibold mb-1">Participante</h2>
          <p className="text-center text-xs md:text-sm">
            Participe de eventos, descubra novas experiências e acompanhe seus eventos favoritos.
          </p>
        </div>

        {/* Organizador */}
        <div
          onClick={() => setSelectedRole('ORGANIZER')}
          className={`flex flex-col items-center justify-center p-6 rounded-xl cursor-pointer transition-transform transform hover:scale-105 border ${
            selectedRole === 'ORGANIZER'
              ? 'bg-laranjaForte text-white border-laranjaForte shadow-lg'
              : 'bg-laranjaPessego text-marromEscuro border-laranjaClaro hover:bg-laranjaClaro'
          } flex-1`}
        >
          <Users size={40} className="mb-4" />
          <h2 className="text-xl font-semibold mb-1">Organizador</h2>
          <p className="text-center text-xs md:text-sm">
            Crie e gerencie seus próprios eventos, acompanhe inscrições e ofereça experiências únicas.
          </p>
        </div>
      </div>

      {/* Botão Continuar */}
      <Button
        onClick={handleContinue}
        disabled={!selectedRole}
        className="mt-10 bg-marromEscuro text-white hover:bg-laranjaForte px-12 py-3 rounded-md text-base disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Continuar
      </Button>
    </div>
  );
};

export default ChooseRolePage;
