export default [
  { source: '/', destination: '/home' },
  { source: '/login', destination: '/login' },
  { source: '/signup', destination: '/signup' },
  { source: '/channels/new', destination: '/channel-create' },
  { source: '/channels/:channelId', destination: '/channel-home' },
  { source: '/channels/:channelId/events', destination: '/channel-events' },
  { source: '/channels/:channelId/events/new', destination: '/event-editor' },
  { source: '/channels/:channelId/events/:eventId', destination: '/event-dashboard' },
  { source: '/channels/:channelId/events/:eventId/edit', destination: '/event-editor' },
  { source: '/channels/:channelId/settings', destination: '/channel-settings' },
  { source: '/channels/:channelId/stripe/setup', destination: '/stripe-setup' },
  { source: '/channels/:channelId/stripe/verify', destination: '/stripe-verify' }
];
