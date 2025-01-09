export default [
  { source: '/', destination: '/home' },
  { source: '/login', destination: '/login' },
  { source: '/signup', destination: '/signup' },
  { source: '/spaces/new', destination: '/space-create' },
  { source: '/spaces/:spaceId', destination: '/space-home' },
  { source: '/spaces/:spaceId/events', destination: '/space-events' },
  { source: '/spaces/:spaceId/events/new', destination: '/event-editor' },
  { source: '/spaces/:spaceId/events/:eventId', destination: '/event-dashboard' },
  { source: '/spaces/:spaceId/events/:eventId/edit', destination: '/event-editor' },
  { source: '/spaces/:spaceId/settings', destination: '/space-settings' }
];
