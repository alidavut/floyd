interface Props {
  success: boolean;
}

export function StripeVerifyView({ success }: Props) {
  return (
    <div>
      <h1>{success ? 'Success' : 'Failed'}</h1>
    </div>
  )
}
