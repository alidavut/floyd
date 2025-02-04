import { ticket } from '@floyd/schema/inputs';
import { stripe } from 'lib/stripe';
import { createHTTPService } from 'services/service';
import { Event } from 'entities';
import { ServiceError } from 'services/errors';

export default createHTTPService({
  id: 'ticket.create',
  inputSchema: ticket.createSchema,

  async perform({ input }) {
    // await stripe.paymentIntents.confirm(input.paymentIntentId, \

    const event = await Event.findOneOrFail({
      where: { id: input.eventId },
      relations: ['channel']
    });

    const paymentIntent = await stripe.paymentIntents.confirm(input.paymentIntentId);

    if (paymentIntent.status !== 'succeeded' ||
        paymentIntent.metadata.eventId !== event.id ||
        paymentIntent.amount !== event.price) {
      throw new ServiceError('Payment intent failed');
    }
  }
});
