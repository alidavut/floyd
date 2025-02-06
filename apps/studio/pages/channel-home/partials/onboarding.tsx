import { ChannelObject, UserObject } from '@floyd/schema/types';
import { Alert, Button } from '@floyd/ui/components';
import Link from 'next/link';
import { ReactElement, useEffect, useRef, useState } from 'react';
import { PiCaretDownBold, PiCheckCircleFill, PiInstagramLogo, PiXLogo } from 'react-icons/pi';
import cx from 'classnames';

interface Props {
  channel: ChannelObject;
  currentUser: UserObject;
  onSendEmailVerification: () => void;
  sendingEmailVerification: boolean;
}

export function Onboarding({ channel, currentUser, onSendEmailVerification, sendingEmailVerification }: Props): ReactElement {
  const [openItem, setOpenItem] = useState<string | null>(
    !currentUser.emailVerified && 'email' ||
    !channel.stripeEnabled && 'stripe' ||
    'loop'
  );

  function toggleItem(item: string) {
    setOpenItem(openItem === item ? null : item);
  }

  return (
    <div>
      <div className="mb-4.5">
        <h3 className="text-2xl font-semibold mb-1.5">
          What's next?
        </h3>
        <p className="text-gray-600 leading-snug">
          Follow these steps to get started with your channel for early access to Floyd.
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
                We've sent an email to <strong>{currentUser.email}</strong> with a link to verify your account.
                Click the link in the email to complete the verification process.
              </p>
              <div>
                <Button disabled={currentUser.emailVerified} onClick={onSendEmailVerification} loading={sendingEmailVerification}>
                  Resend email
                </Button>
              </div>
            </div>
          }
        />
        <Item
          title="Enable Payments"
          completed={channel.stripeEnabled}
          expanded={openItem === 'stripe'}
          onClick={() => toggleItem('stripe')}
          content={
            <div className="space-y-4.5">
              <p>
                Enable payments to start accepting payments from your channel. We'll redirect you to Stripe, our payment
                processor, to complete the setup.
              </p>
              <Alert
                color="warning"
                description="Please verify your email first"
              />
              <div>
                <Link href={`/channels/${channel.id}/stripe/setup`}>
                  <Button disabled={channel.stripeEnabled || !currentUser.emailVerified}>
                    Setup Stripe
                  </Button>
                </Link>
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
                Follow us on social media to stay updated on the latest features and updates.
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
      <div className="flex items-center space-x-2 p-3 cursor-pointer select-none" onClick={onClick}>
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
