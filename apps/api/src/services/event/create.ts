import { Event, Membership, Ticket } from 'entities';
import { createHTTPService } from 'services/service';
import { event } from '@floyd/schema/inputs';
import { EventSerializer } from './serializer';
import { unique } from 'lib/validations';
import { EventStatus } from '@floyd/schema/constants';
import { mux } from 'lib/mux';

export default createHTTPService({
  id: 'event.create',

  inputSchema: event.createSchema
    .superRefine(unique(Event, ['slug', 'channelId'])),

  async authorize({ input, auth }) {
    return auth.ok && Membership.existsBy({ channelId: input.channelId, userId: auth.user.id });
  },

  async perform({ input, auth }) {
    const event = Event.create({
      status: EventStatus.DRAFT,
      ...input
    });

    const liveStream = await mux.video.liveStreams.create({
      playback_policy: ['signed'],
      new_asset_settings: {
        playback_policy: ['signed']
      }
    });

    event.muxLiveStreamId = liveStream.id;

    await event.save();
    await event.reload();

    const ticket = Ticket.create({
      eventId: event.id,
      code: '123456'
    });

    await ticket.save();

    return EventSerializer.serialize(event, auth);
  }
});
