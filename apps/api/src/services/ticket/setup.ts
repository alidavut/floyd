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


    const fee = Math.floor(event.price * 0.1) + 50;
    const totalAmount = event.price + fee;

    const paymentIntent = await stripe.paymentIntents.create({
      amount: totalAmount,
      currency: event.channel.currencyCode,
      application_fee_amount: fee,
      transfer_data: {
        destination: event.channel.stripeId
      },
      metadata: {
        eventId: event.id
      }
    });

    return {
      clientSecret: paymentIntent.client_secret
    };
  }
});
