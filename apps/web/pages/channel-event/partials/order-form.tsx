import { ChannelObject, TicketSetupObject } from '@floyd/schema/types';
import { Button, Input } from '@floyd/ui/components';
import { Elements, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { colors } from '@floyd/utils/colors';

interface Props {
  channel: ChannelObject;
  ticketSetup: TicketSetupObject;
}

export function OrderForm({ channel, ticketSetup }: Props) {
  const stripe = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

  return (
    <Elements
      stripe={stripe}
      options={{
        clientSecret: ticketSetup.clientSecret,
        fonts: [
          {
            cssSrc: 'https://fonts.googleapis.com/css2?family=Albert+Sans:wght@400;500;700&display=swap'
          }
        ],
        appearance: {
          theme: 'flat',
          variables: {
            colorPrimary: colors.bunker[200],
            colorBackground: 'white',
            fontFamily: '"Albert Sans", sans-serif',
            borderRadius: '0.5rem',
            gridRowSpacing: '1.125rem'
          },
          rules: {
            '.Label': {
              color: colors.bunker[950],
              marginBottom: '0.5rem',
              fontSize: '0.875rem',
              fontWeight: '500'
            },
            '.Input	': {
              border: `1px solid ${colors.gray[200]}`,
              padding: '0.625rem',
            },
            '.Input:focus': {
              borderColor: colors.purple[950],
              boxShadow: `0 0 0 1px ${colors.purple[950]}`
            }
          }
        }
      }}>
      <Form channel={channel} />
    </Elements>
  )
}

function Form({ channel }: { channel: ChannelObject }) {
  const stripe = useStripe();
  const elements = useElements();

  async function handleSubmit() {
    const { paymentIntent, error } = await stripe.confirmPayment({
      elements,
      redirect: 'if_required'
    });

    console.log({ paymentIntent, error });
  }

  return (
    <div>
      <h1>Buy Ticket</h1>
      <div className="space-y-4.5">
        <PaymentElement
        />
        <Input
          label="Email"
          placeholder="We'll send your ticket here"
        />
        <Input
          label="First Name"
          placeholder="John"
        />
        <Input
          label="Last Name"
          placeholder="Doe"
        />
        <Button onClick={handleSubmit} fullWidth>
          Buy Ticket
        </Button>
      </div>
    </div>
  )
}
