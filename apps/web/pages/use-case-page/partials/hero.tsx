import { Button } from '@floyd/ui/components';
import { StaticImageData } from 'next/image';
import { PiRocketLaunch, PiStarFill } from 'react-icons/pi';

interface Props {
  title: string;
  description: string;
  image: StaticImageData;
}

export function Hero({ title, description, image }: Props) {
  return (
    <div className="container py-12">
      <div className="grid lg:grid-cols-11 gap-12 lg:gap-18">
        <div className="lg:col-span-6 flex flex-col justify-center">
          <div className="flex items-center space-x-1 mb-6">
            <PiStarFill className="text-green-600 w-5 h-5" />
            <PiStarFill className="text-green-600 w-5 h-5" />
            <PiStarFill className="text-green-600 w-5 h-5" />
            <PiStarFill className="text-green-600 w-5 h-5" />
            <PiStarFill className="text-green-600 w-5 h-5" />
            <span className="text-bunker-400 text-[0.875rem] pl-2 font-medium leading-none">
              Trusted by forward thinkers.
            </span>
          </div>

          <h1 className="text-[2.5rem] lg:text-[4rem] font-bold tracking-tight leading-[2.5rem] lg:leading-[4rem] mb-6">
            {title}
          </h1>
          <p className="text-[1.125rem] lg:text-[1.25rem] text-bunker-700 leading-[1.75rem] lg:leading-[2rem] font-medium mb-12">
            {description}
          </p>
          <div className="grid lg:grid-cols-2 gap-6 lg:w-5/6">
            <a href="https://studio.floyd.so/signup">
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
          <div className="aspect-square relative z-10">
            <div className="absolute top-1.5 left-1.5 bottom-0 right-0 bg-purple-600/15 rounded-2xl rotate-2" />
            <div className="absolute top-1.5 left-1.5 bottom-0 right-0 bg-bunker-950 rounded-2xl" />
            <div className="pr-1.5 pb-1.5 relative">
              <div className="relative">
                <img
                  className="relative object-cover aspect-square rounded-2xl border border-bunker-950"
                  src={image.src}
                  alt={title}
                />
                <div className="absolute top-4 left-4 flex items-center space-x-4">
                  <div className="flex items-center space-x-2 bg-red-600 px-3 py-1 rounded-full">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    <span className="text-white text-sm font-semibold">LIVE</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-bunker-950/70 px-3 py-1 rounded-full">
                    <div className="w-1 h-1 bg-green-500 rounded-full" />
                    <span className="text-white text-sm">1.2k watching</span>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 space-y-2">
                  <div className="flex items-start space-x-2 bg-bunker-950/70 p-2 rounded-lg max-w-[80%]">
                    <div className="w-8 h-8 rounded-full bg-purple-500 flex-shrink-0" />
                    <div>
                      <span className="text-purple-300 text-sm font-semibold">@sarah_dev</span>
                      <p className="text-white text-sm">This is exactly what I've been looking for! 🚀</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2 bg-bunker-950/70 p-2 rounded-lg max-w-[80%]">
                    <div className="w-8 h-8 rounded-full bg-yellow-500 flex-shrink-0" />
                    <div>
                      <span className="text-yellow-300 text-sm font-semibold">@tech_tom</span>
                      <p className="text-white text-sm">The features look amazing! 🔥</p>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-bunker-950/70 px-3 py-1 rounded-lg">
                  <span className="text-white text-sm font-medium">01:23:45</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
