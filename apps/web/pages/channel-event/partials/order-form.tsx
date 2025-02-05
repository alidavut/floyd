import { ChannelObject, TicketInitiationObject } from '@floyd/schema/types';
import { Button, Form, Input } from '@floyd/ui/components';
import { Elements, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { colors } from '@floyd/utils/colors';
import { useState } from 'react';
import { ticket } from '@floyd/schema/inputs';
import { getInputErrors, ServiceError } from 'lib/error';

interface Props {
  channel: ChannelObject;
  ticketInitiation: TicketInitiationObject;
  onInitiateTicket: (params: any) => void;
  error: ServiceError;
}

export function OrderForm({ channel, ticketInitiation, onInitiateTicket, error }: Props) {
  return (
    <div>
      {ticketInitiation ? (
        <PaymentFormWrapper channel={channel} ticketInitiation={ticketInitiation} />
      ) : (
        <InitiateForm onInitiateTicket={onInitiateTicket} error={error} />
      )}
    </div>
  )
}

function InitiateForm({ onInitiateTicket, error }: { onInitiateTicket: (params: ticket.initiateParams) => void, error: any }) {
  const [params, setParams] = useState({ email: '', firstName: '', lastName: '' });

  const errors = getInputErrors(error);

  console.log({ errors, error });

  return (
    <Form className="space-y-4.5" onSubmit={() => onInitiateTicket(params)}>
      <Input
        label="Email"
        placeholder="We'll send your ticket here"
        onValueChange={(email) => setParams({ ...params, email })}
        value={params.email}
        errors={errors?.email}
      />
      <Input
        label="First Name"
        onValueChange={(firstName) => setParams({ ...params, firstName })}
        value={params.firstName}
        errors={errors?.firstName}
      />
      <Input
        label="Last Name"
        onValueChange={(lastName) => setParams({ ...params, lastName })}
        value={params.lastName}
        errors={errors?.lastName}
      />
      <Button type="submit" fullWidth>
        Continue
      </Button>
    </Form>
  )
}

function PaymentFormWrapper({ channel, ticketInitiation }: { channel: ChannelObject, ticketInitiation: TicketInitiationObject }) {
  const stripe = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

  return (
    <Elements
      stripe={stripe}
      options={{
        clientSecret: ticketInitiation.clientSecret,
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
      <PaymentForm channel={channel} />
    </Elements>
  )
}

function PaymentForm({ channel }: { channel: ChannelObject }) {
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
        <Button onClick={handleSubmit} fullWidth>
          Buy Ticket
        </Button>
      </div>
    </div>
  )
}
