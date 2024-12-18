import { Button } from '@floyd/ui/components';
import { PiArrowRight } from 'react-icons/pi';

export function GetStarted() {
  return (
    <div className="container">
      <div className="border-t border-dashed border-gray-300/80">
        <div className="py-20 lg:py-32">
          <div className="text-center">
            <h2 className="text-3xl max-w-xl mx-auto mb-3 leading-10">
              <span className="block text-[1.375rem] font-light">Let's make your booking system</span>
              <span className="text-violet-700 text-[2.25rem] font-semibold tracking-tight">
                fast, reliable, scalable
              </span>
            </h2>
            <p className="text- text-gray-500 max-w-xs mx-auto">
              Book a demo with our team to see how Floyd can help you.
            </p>
            <div className="mt-9">
              <a href="https://tally.so/r/mRBgXP" target="_blank" rel="noreferrer">
                <Button size="large">
                  <span className="flex items-center space-x-2">
                    <span>
                      Request Demo
                    </span>
                    <PiArrowRight className="w-[1.175rem] h-[1.175rem]" />
                  </span>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
