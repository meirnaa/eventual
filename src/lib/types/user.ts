export interface UpsertUserPayload {
  id: string;
  nome: string;
  email: string;
  cidade?: string | null;
  fotoUrl?: string | null;
  visibilidadeParticipacao: boolean;
  ratingOrganizador: number;
  role: 'USER' | 'ORGANIZER';
  senhaHash: string;
}

export interface BackendUser {
  id: string;
  nome: string;
  email: string;
  role: 'USER' | 'ORGANIZER';
}