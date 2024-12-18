import { Button } from '@floyd/ui/components';

export function Cover() {
  return (
    <div
      className="relative z-10 py-20 lg:py-36 pt-28 lg:pt-40">
      <div className="relative container">
        <div className="grid lg:grid-cols-11 gap-12">
          <div className="lg:col-span-6 relative">
            <div className="relative">
              <h1 className="text-[2rem] lg:text-[5rem] font-bold tracking-tight leading-[2.25rem] lg:leading-[4.675rem] mb-6">
                Revolutionizing event booking
                {' '}
                <span className="inline-block relative">
                  <span className="h-[1.5rem] bg-purple-200 block absolute inset-0 top-auto -rotate-1 rounded" />
                  <span className="relative">for creators</span>
                </span>
              </h1>
              <p className="font-medium text-[1rem] lg:text-[1.5rem] text-gray-800 mb-12 leading-[1.5] max-w-xl">
                Accept bookings, manage your schedule, and monetize your events in minutes. It's super easy to get started.
              </p>
              <div className="space-x-4">
                <a href="https://tally.so/r/mRBgXP" target="_blank" rel="noreferrer">
                  <Button size="huge">
                    Setup my page
                  </Button>
                </a>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 lg:block relative">
          </div>
        </div>
      </div>
    </div>
  )
}
