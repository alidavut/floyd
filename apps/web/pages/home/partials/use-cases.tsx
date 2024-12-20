import { PiAirplaneTakeoff, PiBed, PiCalendarStar, PiHeartHalf, PiPersonSimpleHike, PiTicket } from 'react-icons/pi';

export function UseCases() {
  return (
    <div>
      <div className="container">
        <div className="bg-green-100 rounded-2xl p-12">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-24">
            <div>
              <h3 className="text-3xl lg:text-3xl font-bold mb-4">
                Tailored for every booking scenario
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Floyd’s versatile APIs support a wide range of scheduling needs across industries, from accommodations
                and events to rentals and appointments, enabling seamless booking experiences.
              </p>
            </div>
            <div className="lg:col-span-2 grid lg:grid-cols-2 gap-12">
              <Item
                icon={PiBed}
                title="Hotels & Vacation Rentals"
                description="Simplify room management, offer flexible pricing, and keep availability up-to-date."
              />
              <Item
                icon={PiTicket}
                title="Event Management"
                description="Streamline ticket sales, attendee check-ins, and custom event schedules."
              />
              <Item
                icon={PiAirplaneTakeoff}
                title="Transportation & Travel"
                description="Manage seat reservations, routes, and dynamic pricing."
              />
              <Item
                icon={PiHeartHalf}
                title="Healthcare & Wellness"
                description="Coordinate practitioner schedules, appointment types, and waitlists."
              />
              <Item
                icon={PiCalendarStar}
                title="Equipment & Venue Rentals"
                description="Enable flexible time slots and options for deposits and add-ons."
              />
              <Item
                icon={PiPersonSimpleHike}
                title="Experiences & Tours"
                description="Support bookings for tours, workshops, and activities with real-time availability."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Item({ icon, title, description }) {
  const Icon = icon ?? (() => <span />);

  return (
    <div className="borderx border-gray-400/50 rounded">
      <div className="bg-gray-200 w-9 h-9 rounded flex items-center justify-center mb-3">
        <Icon className="w-[1.375rem] h-[1.375rem] text-gray-800" />
      </div>
      <h4 className="text-lg font-semibold">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
