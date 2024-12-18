import { Head } from 'components'

export function AboutView() {
  return (
    <div className="flex-1 flex flex-col">
      <Head
        title="About"
      />
      <div className="bg-violet-400/40 pt-20 pb-14 md:pt-16 flex-1 flex items-center">
        <div className="container max-w-xl py-24 pt-28">
          <div className="space-y-4 md:space-y-16">
            <p className="text-3xl md:text-4xl font-bold md:leading-tight tracking-tight text-center">
              Crafting the Future of Booking: Empowering Developers with Cutting-Edge Innovation
            </p>
          </div>
        </div>
      </div>
      <div className="container py-16 max-w-2xl text-center">
        <p className="mb-8 text-xl font-medium">
          Floyd is spearheading a transformative journey in booking technology, providing developers with powerful
          API solutions. Our expert team, driven by innovation and technical excellence, is committed to
          revolutionizing how scheduling and reservation functionalities are integrated into platforms, ensuring that
          every interaction is as smooth and efficient as it is sophisticated.
        </p>
        <hr className="max-w-[5rem] mx-auto my-16" />
        <h3 className="text-xl font-semibold">Have any questions?</h3>
        <p>
          Feel free to reach out to us at{' '}
          <a href="mailto:support@floyd.so" className="underline">
            support@floyd.so
          </a>
        </p>
      </div>
    </div>
  )
}
