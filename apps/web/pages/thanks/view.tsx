import { Button } from '@floyd/ui/components';
import { Head } from 'components';
import { PiInstagramLogo, PiXLogo } from 'react-icons/pi';

export function ThanksView() {
  return (
    <div>
      <div className="container max-w-3xl py-16 md:pb-32">
        <Head
          title="Thanks"
        />
        <div className="mb-12">
          <h2 className="text-2xl md:text-4xl font-semibold text-center mb-4 font-serif">
            You're In! 🎉
          </h2>
          <p className="text-sm md:text-base max-w-2xl mx-auto text-center text-gray-800 font-medium mb-12">
            Thanks for signing up, Frontier! You’re now part of a bold movement to redefine booking and ticketing.
            We’re excited to help you turn your ideas into unforgettable experiences. Keep an eye on your inbox for
            updates—we can’t wait to see what you’ll create! 🚀
          </p>
          <div className="grid lg:grid-cols-2 gap-3 max-w-lg mx-auto">
            <a href="https://x.com/KalendaHQ" target="_blank" rel="noreferrer">
              <Button fullWidth>
                <span className="flex items-center justify-center space-x-2">
                  <PiXLogo className="w-5 h-5" />
                  <span>
                    Follow us on X
                  </span>
                </span>
              </Button>
            </a>
            <a href="https://instagram.com/heyfloydso" target="_blank" rel="noreferrer">
              <Button fullWidth>
                <span className="flex items-center justify-center space-x-2">
                  <PiInstagramLogo className="w-5 h-5" />
                  <span>
                    Follow us on Instagram
                  </span>
                </span>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
