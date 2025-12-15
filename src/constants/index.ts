export const headerLinksByRole = {
  USER: [
    { label: 'Eventos', route: '/user/events' },
    { label: 'Meus Ingressos', route: '/user/tickets' },
    { label: 'Perfil', route: '/user/profile' },
  ],
  ORGANIZER: [
    { label: 'Dashboard', route: '/organizer' },
    { label: 'Meus Eventos', route: '/organizer/events' },
    { label: 'Criar Evento', route: '/organizer/events/new' },
  ],
};


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