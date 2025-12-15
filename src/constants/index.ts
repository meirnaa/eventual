export const headerLinksUser = [
  {
    label: 'Home',
    route: '/',
  },
  {
    label: 'Minhas inscrições',
    route: '/events/inscricoes',
  },
  {
    label: 'Meu Perfil',
    route: '/profile',
  },
]

export const headerLinksOrganizer = [
  {
    label: 'Home',
    route: '/',
  },
  {
    label: 'Criar Evento',
    route: '/events/create',
  },
  {
    label: 'Meu Perfil',
    route: '/profile',
  },
]

export const headerLinksPublic = [
  {
    label: 'Home',
    route: '/',
  },
  {
    label: 'Eventos',
    route: '/events/create',
  },
]

export const eventDefaultValues = {
  title: '',
  description: '',
  location: '',
  imageUrl: '',
  startDateTime: new Date(),
  endDateTime: new Date(),
  categoryId: '',
  price: '',
  isFree: false,
  url: '',
}