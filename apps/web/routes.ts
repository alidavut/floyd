export default [
  { source: '/', destination: '/home' },
  { source: '/about', destination: '/about' },
  { source: '/about/:page', destination: '/static' },
  { source: '/:handle', destination: '/profile-home' }
];
