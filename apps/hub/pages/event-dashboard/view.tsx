import { EventObject } from '@floyd/schema/types'

interface Props {
  event: EventObject;
}

export function EventDashboardView({ event }: Props) {
  return (
    <div>
      <h1>{event.title}</h1>
      <p>{event.description}</p>
    </div>
  )
}
