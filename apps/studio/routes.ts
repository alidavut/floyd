export default [
  { source: '/', destination: '/home' },
  { source: '/login', destination: '/login' },
  { source: '/signup', destination: '/signup' },
  { source: '/verify-email/:token', destination: '/verify-email' },
  { source: '/channels/new', destination: '/channel-create' },
  { source: '/channels/:channelId', destination: '/channel-home' },
  { source: '/channels/:channelId/settings', destination: '/channel-settings' },
  { source: '/channels/:channelId/stripe/verify', destination: '/stripe-verify' }
];
