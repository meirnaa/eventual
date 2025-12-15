import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs/server';
import { getUserByClerkId } from '@/lib/services/user.service';

export default async function PublicHome() {
  const { userId } = await auth();

  // Não logado → landing pública
  if (!userId) {
    return (
      <main>
        <h1>Bem-vindo ao Eventual</h1>
        <p>Crie e participe de eventos incríveis.</p>
      </main>
    );
  }

  const user = await getUserByClerkId(userId);

  // Logado mas não onboardado
  if (!user) {
    redirect('/onboarding');
  }

  // Decide por role
  if (user.role === 'ORGANIZER') {
    redirect('/organizer');
  }

  redirect('/user');
}
