import { Button } from '@floyd/ui/components';
import { StaticImageData } from 'next/image';
import { PiRocketLaunch } from 'react-icons/pi';

interface Props {
  title: string;
  description: string;
  image: StaticImageData;
}

export function Cover({ title, description, image }: Props) {
  return (
    <div className="container py-12">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
        <div className="flex flex-col justify-center">
          <h1 className="text-[2rem] lg:text-[3.25rem] font-semibold font-serif leading-[3rem] lg:leading-[4rem] mb-6">
            {title}
          </h1>
          <p className="text-[1.125rem] lg:text-[1.25rem] text-gray-900 leading-[1.75rem] lg:leading-[2rem] font-medium mb-12">
            {description}
          </p>
          <div className="grid lg:grid-cols-2 gap-6">
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
        <div>
          <img
            className="w-full aspect-[9/10] object-cover rounded-sm"
            src={image.src}
            alt={title}
          />
        </div>
      </div>
    </div>
  )
}
