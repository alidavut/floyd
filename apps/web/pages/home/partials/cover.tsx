import { Button } from '@floyd/ui/components';
import coverImage from './cover-image.svg';

export function Cover() {
  return (
    <div
      className="relative z-10 py-20 lg:py-40 pt-28 lg:pt-44">
      <div
        className="bg-gradient-to-br absolute inset-0 z-0 from-purple-50 to-pink-50"
      />
      <div
        className="bg-gradient-to-b absolute inset-0 z-0 from-transparent to-white"
      />
      <div className="container relative">
        <div className="grid grid-cols-7">
          <div className="col-span-4">
            <h1 className="text-[2rem] lg:text-[4.5rem] font-bold tracking-tight leading-[2.25rem] lg:leading-[4.5rem] mb-6">
              Booking platform made
              {' '}
              <span className="inline-block relative">
                <span className="h-[1.5rem] bg-purple-200 block absolute inset-0 top-auto -rotate-1 rounded-full" />
                <span className="relative">for frontiers</span>
              </span>
            </h1>
            <p className="font-medium text-[1rem] lg:text-[1.5rem] text-gray-800 mb-12 leading-[1.5] max-w-xl">
              Accept bookings, manage your schedule, and monetize your events in minutes. It's super easy to get started
              with Floyd.
            </p>
            <div className="space-x-4">
              <a href="https://manager.floyd.so/signup" target="_blank" rel="noreferrer">
                <Button size="huge">
                  Setup my page
                </Button>
              </a>
            </div>
          </div>
          <div className="col-span-3">
            <img src={coverImage.src} className="w-full" />
          </div>
        </div>
      </div>
    </div>
  )
}
