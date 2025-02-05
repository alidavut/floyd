export default [
  { source: '/', destination: '/home' },
  { source: '/login', destination: '/login' },
  { source: '/signup', destination: '/signup' },
  { source: '/channels/new', destination: '/channel-create' },
  { source: '/channels/:channelId', destination: '/channel-home' },
  { source: '/channels/:channelId/settings', destination: '/channel-settings' }
];
