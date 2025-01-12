import { Button } from '@floyd/ui/components';
import coverImage from './cover-image.png';
import { PiRocketLaunch, PiStarFill } from 'react-icons/pi';

export function Cover() {
  return (
    <div
      className="relative z-10 mb-20 lg:mb-0 overflow-hidden">
      <div
        className="bg-gradient-to-br absolute inset-0 z-0 from-gray-100 to-purple-100"
      />
      <div
        className="bg-gradient-to-b absolute inset-0 z-0 from-transparent to-gray-100"
      />
      <div className="container">
        <div className="grid lg:grid-cols-11 gap-12">
          <div className="lg:col-span-6 pt-24 lg:py-36 lg:pb-32 xl:py-52 xl:pb-48 relative">
            <div className="flex items-center space-x-1 mb-6">
              <PiStarFill className="text-green-600 w-5 h-5" />
              <PiStarFill className="text-green-600 w-5 h-5" />
              <PiStarFill className="text-green-600 w-5 h-5" />
              <PiStarFill className="text-green-600 w-5 h-5" />
              <PiStarFill className="text-green-600 w-5 h-5" />
              <span className="text-gray-500 text-[0.875rem] pl-2 font-medium">
                Trusted by forward thinkers.
              </span>
            </div>
            <h1 className="text-[2.25rem] lg:text-[3.5rem] xl:text-[4.7rem] leading-[2.5rem] lg:leading-[4rem] xl:leading-[4.75rem] mb-6 font-bold tracking-tight">
              Streaming mastery,<br /> made
              {' '}
              <span className="inline-block relative">
                <span className="h-[0.75rem] md:h-[1.5rem] bg-orange-200 block absolute inset-0 top-auto -rotate-1 rounded-full" />
                <span className="relative font-serif italic font-semibold">for frontiers</span>
              </span>
            </h1>
            <p className="font-medium text-[1rem] lg:text-[1.25rem] xl:text-[1.5rem] text-bunker-900 mb-12 leading-[1.5] max-w-xl">
              Host live experiences, sell tickets, and engage your audience effortlessly. Floyd turns bold ideas into
              beautiful, unforgettable experiences—helping you monetize your creativity and expertise with ease.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6 lg:w-4/5">
              <a href="https://hub.floyd.so/signup">
                <Button size="huge" fullWidth>
                  Get early access
                </Button>
              </a>
              <span className="flex items-center text-bunker-500 font-medium">
                <span className="block text-center w-full lg:text-left">
                  You can claim your @handle for your channel now.{' '}
                  <PiRocketLaunch className="w-5 h-5 inline-block" />
                </span>
              </span>
            </div>
          </div>
          <div className="lg:col-span-5">
            <img src={coverImage.src} className="relative lg:absolute lg:left-1/2 lg:right-0 lg:top-0 lg:w-[50vw] lg:mt-18 lg:ml-18 lg:-rotate-3" />
          </div>
        </div>
      </div>
    </div>
  )
}
