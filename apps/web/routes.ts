export default [
  { source: '/', destination: '/home' },
  { source: '/about', destination: '/about' },
  { source: '/about/:page', destination: '/static' },
  { source: '/blog/:slug', destination: '/blog-post' }
];
