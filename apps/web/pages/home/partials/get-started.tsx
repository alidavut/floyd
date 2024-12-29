import { Button } from '@floyd/ui/components';

export function GetStarted() {
  return (
    <div className="container">
      <div>
        <div className="pb-20 lg:pb-32">
          <div className="text-center">
            <h2 className="text-3xl max-w-xl mx-auto mb-3 leading-10">
              <span className="block text-[1.375rem] font-light">Let's make your profile</span>
              <span className="text-purple-700 text-[2.25rem] font-semibold tracking-tight">
                simple, amazing, inspiring
              </span>
            </h2>
            <p className="text- text-bunker-400 max-w-xs mx-auto">
              Get started with Floyd and start accepting bookings in minutes.
            </p>
            <div className="mt-9">
              <a href="https://tally.so/r/3E8EVq" target="_blank" rel="noreferrer">
                <Button size="large">
                  Get early access
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
