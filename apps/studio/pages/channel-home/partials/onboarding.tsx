import { ChannelObject, UserObject } from '@floyd/schema/types';
import { Alert, Button, Input, Select } from '@floyd/ui/components';
import Link from 'next/link';
import { ReactElement, useEffect, useRef, useState } from 'react';
import { PiCaretDownBold, PiCheckCircleFill, PiInstagramLogo, PiLightbulb, PiXLogo } from 'react-icons/pi';
import cx from 'classnames';
import { countries } from '@floyd/schema/constants';

interface Props {
  channel: ChannelObject;
  currentUser: UserObject;
  onSendEmailVerification: () => void;
  sendingEmailVerification: boolean;
  onSetupStripe: (countryCode: string) => void;
  settingUpStripe: boolean;
}

export function Onboarding({ channel, currentUser, onSendEmailVerification, sendingEmailVerification, onSetupStripe, settingUpStripe }: Props): ReactElement {
  const stripeEnabled = channel.chargesEnabled && channel.payoutsEnabled;

  const [openItem, setOpenItem] = useState<string | null>(
    !currentUser.emailVerified && 'email' ||
    !stripeEnabled && 'stripe' ||
    'loop'
  );

  const [countryCode, setCountryCode] = useState(channel.countryCode);

  function toggleItem(item: string) {
    setOpenItem(openItem === item ? null : item);
  }

  return (
    <div>
      <div className="mb-4.5">
        <h3 className="text-2xl font-semibold mb-1.5">
          What's Next?
        </h3>
        <p className="text-gray-600 leading-snug">
          Follow these steps to become a verified user and get ready to create events when we launch—or even secure early access!
        </p>
      </div>
      <div className="space-y-3">
        <Item
          title="Verify your email"
          completed={currentUser.emailVerified}
          expanded={openItem === 'email'}
          onClick={() => toggleItem('email')}
          content={
            <div className="space-y-4.5">
              <p>
                We’ve sent a verification email to <strong>{currentUser.email}</strong>. Please click the button inside
                to confirm your account and unlock the next steps.
              </p>
              <div>
                <Button disabled={currentUser.emailVerified} onClick={onSendEmailVerification} loading={sendingEmailVerification}>
                  {currentUser.emailVerified ? 'Email verified' : 'Resend Verification Email'}
                </Button>
              </div>
            </div>
          }
        />
        <Item
          title="Enable payments"
          completed={stripeEnabled}
          expanded={openItem === 'stripe'}
          onClick={() => toggleItem('stripe')}
          content={
            <div className="space-y-4.5">
              <p>
                Get set up to accept payments from your channel by linking your account with Stripe. Complete this step
                now so you’re ready when event creation goes live.
              </p>
              {!currentUser.emailVerified && (
                <Alert
                  color="warning"
                  description="Please verify your email first"
                />
              )}
              <Alert
                color="warning"
                description="We only support a small number of countries for now."
              />
              <Select
                label="Your country"
                options={countries}
                onValueChange={setCountryCode}
                value={countryCode}
                disabled={!!channel.countryCode}
              />
              <div>
                <Button
                  onClick={() => onSetupStripe(countryCode)}
                  disabled={stripeEnabled || !currentUser.emailVerified || !countryCode}
                  loading={settingUpStripe}>
                  {stripeEnabled ? 'Stripe enabled' : 'Setup Stripe'}
                </Button>
              </div>
            </div>
          }
        />
        <Item
          title="Stay in the loop"
          completed={false}
          expanded={openItem === 'loop'}
          onClick={() => toggleItem('loop')}
          content={
            <div className="space-y-4.5">
              <p>
                Follow us on social media and share your thoughts—stay updated on new features, product launch news,
                and exclusive early access opportunities.
              </p>
              <div className="space-y-3">
                <a href="https://tally.so/r/mVbqRl" target="_blank" rel="noreferrer" className="block">
                  <Button fullWidth>
                    <span className="flex items-center justify-center space-x-2">
                      <PiLightbulb className="w-5 h-5" />
                      <span>
                        Take a quick survey
                      </span>
                    </span>
                  </Button>
                </a>
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
              </div>
            </div>
          }
        />
      </div>
    </div>
  )
}

interface ItemProps {
  title: string;
  content: ReactElement;
  completed: boolean;
  expanded: boolean;
  onClick: () => void;
}

export function Item({ title, content, completed, expanded, onClick }: ItemProps) {
  const [height, setHeight] = useState<string | number>('auto');
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.scrollHeight);
    }
  }, []);

  return (
    <div className={cx('border border-gray-200/70 rounded-xl', expanded && 'shadow-sm shadow-gray-900/5')}>
      <div className="flex items-center space-x-1.5 p-3 cursor-pointer select-none" onClick={onClick}>
        <div>
          <PiCheckCircleFill
            className={`text-2xl ${completed ? 'text-green-500' : 'text-gray-200'}`}
          />
        </div>
        <div className={cx('flex-1 text-lg font-semibold', expanded ? 'text-gray-950' : 'text-gray-800')}>
          {title}
        </div>
        <div>
          <a
            className={cx('block transition-all text-gray-400', expanded && '-rotate-180')}
            onClick={e => e.preventDefault()}>
            <PiCaretDownBold />
          </a>
        </div>
      </div>
      <div
        ref={ref}
        className={cx('border-dashed border-gray-200 overflow-hidden transition-all', expanded && 'border-t')}
        style={{ height: expanded ? height : 0 }}>
        <div className="m-4.5">
          {content}
        </div>
      </div>
    </div>
  )
}
