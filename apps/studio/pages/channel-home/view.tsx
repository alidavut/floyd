import { Head } from 'components';
import { Button, Card } from '@floyd/ui/components';
import { services } from 'services';
import { PiArrowSquareOutBold, PiInstagramLogo, PiXLogo } from 'react-icons/pi';
import { ChannelObject, UserObject } from '@floyd/schema/types';
import { Onboarding } from './partials';

interface Props {
  channel: ChannelObject;
  currentUser: UserObject;
  onSendEmailVerification: () => void;
  sendingEmailVerification: boolean;
  onSetupStripe: (countryCode: string) => void;
  settingUpStripe: boolean;
}

export function ChannelHomeView({ channel, currentUser, onSendEmailVerification, sendingEmailVerification, onSetupStripe, settingUpStripe }: Props) {
  async function handleLogout() {
    await services.auth.logout();
    window.location.href = '/';
  }

  return (
    <div className="flex-1 flex items-center justify-center py-12">
      <Head
        title="Studio"
      />
      <div className="container">
        <div className="max-w-md mx-auto space-y-6">
          <Card>
            <Card.Body>
              <p className="font-bold font-heading text-[1.675rem] mb-[0.875rem] text-center">You're In, Pioneer! 🎉</p>
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
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Onboarding
                channel={channel}
                currentUser={currentUser}
                onSendEmailVerification={onSendEmailVerification}
                sendingEmailVerification={sendingEmailVerification}
                onSetupStripe={onSetupStripe}
                settingUpStripe={settingUpStripe}
              />
              <hr
                className="border-gray-200 my-4.5"
              />
              <Button variant="outlined" onClick={handleLogout} fullWidth>
                Logout
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  )
}
