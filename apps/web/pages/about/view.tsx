import { Head } from 'components'

export function AboutView() {
  return (
    <div className="flex-1 flex flex-col">
      <Head
        title="About"
      />
      <div className="bg-yellow-300 flex-1 flex items-center m-4 mt-16 rounded-3xl">
        <div className="container max-w-2xl py-18 lg:py-44">
          <div className="space-y-4 md:space-y-16">
            <p className="text-2xl md:text-[3.25rem] font-bold md:leading-tight text-center">
              Empowering Creators to Thrive in the Spotlight
            </p>
          </div>
        </div>
      </div>
      <div className="container py-6 lg:py-12 max-w-2xl">
        <div
          className="mb-8 text-lg lg:text-xl font-medium space-y-6 border-l border-bunker-400 border-dashed pl-6
            lg:pl-9">
          <p>
            At Floyd, we believe every creator deserves a seamless way to share their passion with the world—without
            complicated tech or steep learning curves. That’s why we’ve built an intuitive, all-in-one platform where
            you can host live events, sell tickets, and engage your audience, all under one sleek, easy-to-use
            interface.
          </p>
          <p>
            Whether you’re a musician performing a virtual concert, a coach hosting a live workshop, or a small team
            organizing an online summit, Floyd gives you the tools to create, manage, and monetize your events on your
            terms. Our mission is to empower individuals and small teams with innovative features that streamline the
            process—so you can focus on delivering unforgettable moments and building deeper connections with your
            community.
          </p>
          <p>
            At our core, we’re creators too. We understand the excitement of sharing your craft, the challenges of
            growth, and the importance of authenticity. That’s why our platform and our culture revolve around
            supporting your vision and amplifying your impact. Join us as we redefine what it means to go live and turn
            bold ideas into memorable experiences—together, powered by Floyd.
          </p>
        </div>
        <hr className="max-w-[5rem] mx-auto my-9 lg:my-18" />
        <div className="text-center mb-9 lg:mb-18">
          <h3 className="text-xl font-semibold">Have any questions?</h3>
          <p>
            Feel free to reach out to us at{' '}
            <a href="mailto:hey@floyd.so" className="underline">
              hey@floyd.so
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
