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

          <h1 className="text-[2.5rem] lg:text-[4rem] font-bold tracking-tight leading-[2.5rem] lg:leading-[4.25rem] mb-6">
            {title}
          </h1>
          <p className="text-[1.125rem] lg:text-[1.25rem] text-bunker-700 leading-[1.75rem] lg:leading-[2rem] font-medium mb-12">
            {description}
          </p>
          <div className="grid lg:grid-cols-2 gap-6 lg:w-4/5">
            <a href="https://hub.floyd.so/signup">
              <Button size="huge" fullWidth>
                Get early access
              </Button>
            </a>
            <span className="flex items-center text-bunker-500 font-medium">
              <span className="block text-center w-full lg:text-left">
                Claim your username now <PiRocketLaunch className="w-5 h-5 inline-block" />
              </span>
            </span>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="aspect-[14/15] relative z-10">
            <div className="absolute top-3 left-3 bottom-0 right-0 bg-purple-600/15 rounded-sm rotate-2" />
            <div className="absolute top-3 left-3 bottom-0 right-0 bg-bunker-950 rounded-sm" />
            <div className="pr-3 pb-3">
              <img
                className="relative object-cover aspect-[14/15] rounded-sm border border-bunker-950"
                src={image.src}
                alt={title}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
