import cx from 'classnames';

export function Flow() {
  return (
    <div className="container">
      <div className="pb-48">
        <div className="grid md:grid-cols-2 lg:w-2/3 gap-18 lg:gap-[4.5rem]">
          <Card
            title="Launch your channel"
            description="Claim your unique @handle and create a channel to showcase your live experiences.
              Make it yours—your style, your vision."
            number={1}
            color="bg-green-300"
          />
          <Card
            title="Plan your sessions"
            description="Easily schedule your live experiences, workshops, or events. Set dates, times, and pricing,
              and customize every detail."
            number={2}
            color="bg-yellow-300"
          />
          <Card
            title="Share your link"
            description="Promote your Floyd profile or individual event pages across social media, emails, or your
              website. Bring your audience straight to you."
            number={3}
            color="bg-purple-300"
          />
          <Card
            title="Earn with ease"
            description="Get paid for your live experiences. Manage your bookings, track earnings, and focus on
              delivering unforgettable moments."
            number={4}
            color="bg-red-300"
          />
        </div>
      </div>
    </div>
  )
}

function Card({ title, description, number, color }) {
  const className = cx(
    'mt-7 pt-9 relative',
  );

  return (
    <div className={className}>
      <div className={cx("w-10 h-7 absolute z-10 -top-2 left-3 rounded-xl -rotate-3", color)}>
      </div>
      <div className={cx("w-10 h-10 rounded-xl flex items-center justify-center absolute z-10 -top-7 left-0 bg-bunker-950/90")}>
        <span className="text-white font-bold text-xl">{number}</span>
      </div>
      <div>
        <h4 className="text-[1.375rem] font-bold mb-1.5 text-black font-heading">{title}</h4>
        <p className="text-xl text-gray-800">{description}</p>
      </div>
    </div>
  )
}
