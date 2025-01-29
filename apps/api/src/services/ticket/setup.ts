import { Event } from 'entities';
import { ticket } from '@floyd/schema/inputs';
import { createHTTPService } from 'services/service';
import { stripe } from 'lib/stripe';

export default createHTTPService({
  id: 'ticket.setup',
  inputSchema: ticket.setupSchema,

  async perform({ input }) {
    const event = await Event.findOneOrFail({
      where: { id: input.eventId },
      relations: ['channel']
    });

    const paymentIntent = await stripe.paymentIntents.create({
      amount: event.price,
      currency: 'usd',
      metadata: {
        eventId: event.id
      }
    }, {
      stripeAccount: event.channel.stripeId
    });

    return {
      clientSecret: paymentIntent.client_secret
    };
  }
});
