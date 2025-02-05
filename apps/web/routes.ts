export default [
  { source: '/', destination: '/home' },
  { source: '/about', destination: '/about' },
  { source: '/about/:page', destination: '/static' },
  { source: '/pricing', destination: '/pricing' },
  { source: '/blog/:slug', destination: '/blog-post' },
  { source: '/for', destination: '/use-cases' },
  { source: '/for/:page', destination: '/use-case-page' },
  { source: '/:handle', destination: '/channel-home' },
  { source: '/:handle/:slug', destination: '/channel-event' }
];
