import { PiCalendarCheck, PiCalendarStar, PiCards, PiCreditCard, PiHighlighterCircle } from 'react-icons/pi';
import cx from 'classnames';

export function Features() {
  return (
    <div className="container">
      <div className="grid grid-cols-2 gap-6 w-3/5">
        <Card
          title="Create your page"
          description="Claim your username and start listing your events."
          icon={PiHighlighterCircle}
          color="bg-green-600"
        />
        <Card
          title="Accept bookings"
          description="Allow your attendees to book your services and events."
          icon={PiCalendarCheck}
          color="bg-yellow-600"
        />
        <Card
          title="Monetize your events"
          description="Set up pricing and accept payments from your attendees."
          icon={PiCreditCard}
          color="bg-purple-600"
        />
      </div>
    </div>
  )
}

function Card({ title, description, icon, color }) {
  const Icon = icon ?? (() => <span />);

  const className = cx(
    'p-9 rounded-sm relative border-s4 border-dashesd border-gray-900 bg-black'
  );

  return (
    <div className={className}>
      <div className={cx("w-12 h-12 rounded-full flex items-center justify-center absolute z-10 -top-7 left-6", color)}>
        <Icon className="w-8 h-8 text-white" />
      </div>
      <div>
        <h4 className="text-2xl font-bold mb-1.5 text-white">{title}</h4>
        <p className="text-lg text-gray-200">{description}</p>
      </div>
    </div>
  )
}
