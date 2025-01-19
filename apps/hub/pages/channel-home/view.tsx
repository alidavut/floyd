import { Head } from 'components';
import { Button, Card } from '@floyd/ui/components';
import { services } from 'services';
import { PiArrowSquareOutBold, PiInstagramLogo, PiXLogo } from 'react-icons/pi';
import { ChannelObject } from '@floyd/schema/types';

interface Props {
  channel: ChannelObject;
}

export function ChannelHomeView({ channel }: Props) {
  async function handleLogout() {
    await services.auth.logout();
    window.location.href = '/login';
  }

  return (
    <div className="flex-1 flex items-center justify-center">
      <Head
        title="Hub"
      />
      <div className="container">
        <div className="max-w-md mx-auto">
          <Card>
            <Card.Body>
              <p className="font-bold font-heading text-[1.675rem] mb-[0.875rem] text-center">You're In, Frontier! 🎉</p>
              <p className="mb-3 space-x-1 bg-gray-100 text-center p-6 rounded-lg leading-none">
                <span className="font-medium block mb-1.5 text-sw text-gray-800">
                  You successfully claimed your channel!
                </span>
                <a href={`https://floyd.so/${channel.handle}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-purple-600 inline-flex items-center space-x-1 font-medium">
                  <span>floyd.so/{channel.handle}</span>
                  <PiArrowSquareOutBold className="w-[1.125rem] h-[1.125rem] inline" />
                </a>
              </p>
              <p className="mb-6">
                Thanks for signing up for early access! Your account is all set, and we’ll keep you in the loop on our
                latest features and updates. Stay tuned for more—exciting things are coming your way!
              </p>
              <p className="mb-6">
                In the meantime, follow us on X and Instagram to stay up to date with our latest news and updates.
              </p>
              <div className="space-y-3">
                <a href="https://x.com/heyfloydso" target="_blank" rel="noreferrer" className="block">
                  <Button fullWidth>
                    <span className="flex items-center justify-center space-x-2">
                      <PiXLogo className="w-5 h-5" />
                      <span>
                        Follow us on X
                      </span>
                    </span>
                  </Button>
                </a>
                <a href="https://instagram.com/heyfloydso" target="_blank" rel="noreferrer" className="block">
                  <Button fullWidth>
                    <span className="flex items-center justify-center space-x-2">
                      <PiInstagramLogo className="w-5 h-5" />
                      <span>
                        Follow us on Instagram
                      </span>
                    </span>
                  </Button>
                </a>
                <hr />
                <Button onClick={handleLogout} fullWidth>
                  Logout
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  )
}
