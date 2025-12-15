// ====== CATEGORY PARAMS
export type CreateCategoryParams = {
  categoryName: string
}

export type EventoTipo = 'GRATUITO' | 'PAGO';
export type EventoStatus = 'PLANEJADO' | 'EM_ANDAMENTO' | 'FINALIZADO'; // ajuste conforme seu enum

export interface Evento {
  id: string;
  organizadorId: string;
  titulo: string;
  descricao: string;
  localEndereco?: string | null;
  localUrl?: string | null;
  dataInicio: string;
  dataFim: string;
  preco?: number | null;
  tipo: EventoTipo;
  exigeAprovacao: boolean;
  inscricaoAbre: string;
  inscricaoFecha: string;
  maxInscricoes?: number | null;
  nCheckinsPermitidos: number;
  status: EventoStatus;
  bannerUrl?: string | null;
  cargaHoraria: number;
  createdAt: string;
}
