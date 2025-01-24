import { Input } from '@floyd/ui/components';

export function OrderForm() {
  return (
    <div>
      <h1>Buy Ticket</h1>
      <div className="space-y-3">
        <Input
          label="Email"
          placeholder="We'll send your ticket here"
        />
      </div>
    </div>
  )
}
