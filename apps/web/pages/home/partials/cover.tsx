import { Button } from '@floyd/ui/components';
import coverImage from './cover-image.png';
import { PiRocketLaunch, PiStarFill } from 'react-icons/pi';

export function Cover() {
  return (
    <div
      className="relative z-10 mb-20 lg:mb-0">
      <div
        className="bg-gradient-to-br absolute inset-0 z-0 from-gray-100 to-purple-100"
      />
      <div
        className="bg-gradient-to-b absolute inset-0 z-0 from-transparent to-gray-100"
      />
      <div className="container relative">
        <div className="grid lg:grid-cols-11 gap-12">
          <div className="lg:col-span-6 pt-24 lg:py-52 lg:pb-48">
            <div className="flex items-center space-x-1 mb-6">
              <PiStarFill className="text-green-600 w-5 h-5" />
              <PiStarFill className="text-green-600 w-5 h-5" />
              <PiStarFill className="text-green-600 w-5 h-5" />
              <PiStarFill className="text-green-600 w-5 h-5" />
              <PiStarFill className="text-green-600 w-5 h-5" />
              <span className="text-gray-500 text-[0.875rem] pl-2 font-medium">
                A tool trusted by forward thinkers.
              </span>
            </div>
            <h1 className="text-[2.5rem] lg:text-[4.75rem] font-bold tracking-tight leading-[2.5rem] lg:leading-[4.75rem] mb-6">
              Booking mastery,<br /> made
              {' '}
              <span className="inline-block relative">
                <span className="h-[1.5rem] bg-yellow-200 block absolute inset-0 top-auto -rotate-1 rounded-full" />
                <span className="relative font-serif italic font-semibold">for frontiers</span>
              </span>
            </h1>
            <p className="font-medium text-[1rem] lg:text-[1.5rem] text-gray-900 mb-12 leading-[1.5] max-w-xl">
              Accept bookings, manage schedules, and monetize events in minutes. Floyd turns bold ideas into beautiful,
              unforgettable experiences.
            </p>
            <div className="grid lg:grid-cols-2 gap-6 lg:w-3/4">
              <a href="https://tally.so/r/3E8EVq" target="_blank" rel="noreferrer">
                <Button size="huge" fullWidth>
                  Get early access
                </Button>
              </a>
              <span className="flex items-center text-gray-600 font-medium">
                <span className="block text-center w-full lg:text-left">
                  Claim your spot soon <PiRocketLaunch className="w-5 h-5 inline-block" />
                </span>
              </span>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="lg:absolute inset-0 flex items-center">
              <img src={coverImage.src} className="w-full h-80 lg:h-auto object-cover lg:rotate-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
