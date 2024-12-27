export default [
  { source: '/', destination: '/home' },
  { source: '/about', destination: '/about' },
  { source: '/about/:page', destination: '/static' },
  { source: '/for/:page', destination: '/use-case-page' },
  { source: '/:handle', destination: '/profile-home' }
];
