import cx from 'classnames';

export function Features() {
  return (
    <div className="container">
      <div className="border-b border-dashed border-bunker-300 mb-20 lg:mb-32 pb-32">
        <div className="grid md:grid-cols-2 lg:w-2/3 gap-6 lg:gap-[4.5rem]">
          <Card
            title="Create your page"
            description="Claim your username and start listing your events."
            number={1}
            color="bg-green-300"
          />
          <Card
            title="Add your listings"
            description="Create your events in minutes with our easy-to-use tools."
            number={2}
            color="bg-yellow-300"
          />
          <Card
            title="Share your profile"
            description="Promote your page and start getting bookings."
            number={3}
            color="bg-purple-300"
          />
          <Card
            title="Accept bookings"
            description="Get paid instantly and manage your schedule with ease."
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
    'mt-7 pt-9 rounded-sm relative',
  );

  return (
    <div className={className}>
      <div className={cx("w-10 h-7 absolute z-10 -top-2 left-3 rounded-sm -rotate-3", color)}>
      </div>
      <div className={cx("w-10 h-10 rounded-sm flex items-center justify-center absolute z-10 -top-7 left-0 bg-bunker-950/90")}>
        <span className="text-white font-bold text-xl">{number}</span>
      </div>
      <div>
        <h4 className="text-2xl font-bold mb-1.5 text-black">{title}</h4>
        <p className="text-xl text-gray-800">{description}</p>
      </div>
    </div>
  )
}
