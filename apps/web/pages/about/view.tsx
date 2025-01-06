import { Head } from 'components'

export function AboutView() {
  return (
    <div className="flex-1 flex flex-col">
      <Head
        title="About"
      />
      <div className="bg-bunker-800 flex-1 flex items-center text-white">
        <div className="container max-w-3xl py-40">
          <div className="space-y-4 md:space-y-16">
            <p className="text-3xl md:text-5xl font-semibold md:leading-tight text-center">
              Revolutionizing Event Bookings: Powerful Solutions for Creators
            </p>
          </div>
        </div>
      </div>
      <div className="container py-16 max-w-2xl text-center">
        <p className="mb-8 text-xl font-medium">
          Floyd is redefining how event and experience creators manage their bookings. With a focus on simplicity and
          empowerment, we provide intuitive, powerful booking systems that help individuals and small teams take
          control of their events. Whether it’s accepting bookings, managing schedules, or monetizing experiences,
          Floyd makes it all effortless. Our mission is to empower creators with the tools they need to succeed, all
          while offering a sleek and enjoyable platform that aligns with their passion and vision.
        </p>
        <hr className="max-w-[5rem] mx-auto my-16" />
        <h3 className="text-xl font-semibold">Have any questions?</h3>
        <p>
          Feel free to reach out to us at{' '}
          <a href="mailto:hey@floyd.so" className="underline">
            hey@floyd.so
          </a>
        </p>
      </div>
    </div>
  )
}
