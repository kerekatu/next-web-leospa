const CONSTANTS = {
  header: {
    default: [
      { link: '/', label: 'Home' },
      { link: '/#about', label: 'About' },
      { link: '/features', label: 'Features' },
      { link: '/services', label: 'Services' },
      { link: '/#contact', label: 'Contact' },
    ],
    admin: [
      { link: '/admin', label: 'Dashboard' },
      { link: '/admin/treatment', label: 'Treatment' },
      { link: '/admin/about', label: 'About' },
      { link: '/admin/hero', label: 'Hero' },
      { link: '/admin/footer', label: 'Footer' },
    ],
  },
  API_URL: 'http://localhost:5029',
}

export default CONSTANTS
