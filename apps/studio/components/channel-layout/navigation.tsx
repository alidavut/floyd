import { ComponentType, ReactElement } from 'react';
import { useDropdownMenu } from '@floyd/ui/hooks';
import { services } from 'services';
import { ChannelObject, UserObject } from '@floyd/schema/types';
import Link from 'next/link';
import { PiArrowSquareOut, PiHouse, PiListHeart, PiSliders, PiUserCircle } from 'react-icons/pi';
import { IconBaseProps } from 'react-icons';
import { useRouter } from 'next/router';
import cx from 'classnames';

interface Props {
  channel: ChannelObject;
  channels: ChannelObject[];
  currentUser: UserObject;
}

export function Navigation({ channel, currentUser }: Props): ReactElement {
  const { triggerRef } = useDropdownMenu({
    items: [
      {
        label: 'Logout',
        onClick: async () => {
          await services.auth.logout();
          window.location.href = '/login';
        }
      }
    ]
  });

  return (
    <div className="flex flex-col h-screen">
      <div className="flex items-center space-x-3 border-b border-bunker-100/80 p-4">
        <div className="bg-bunker-950 text-white rounded-xl w-8 h-12 flex items-center justify-center
          font-semibold leading-none flex-shrink-0">
          {channel.name[0].toUpperCase()}
        </div>
        <div className="leading-none truncate">
          <div className="font-semibold mb-0.5 truncate mt-0.5">
            {channel.name}
          </div>
          <a
            href={`//floyd.so/${channel.handle}`}
            className="inline-flex items-center space-x-1 text-bunker-400 text-xs font-medium"
            target="_blank"
            rel="noopener noreferrer">
            <span>View your page</span>
            <PiArrowSquareOut className="w-3 h-3 inline" />
          </a>
        </div>
      </div>
      <ul className="flex-1 space-y-1.5 p-4">
        <NavigationLink
          path={`/channels/${channel.id}`}
          icon={PiHouse}
          label="Home"
          singular
        />
        <NavigationLink
          path={`/channels/${channel.id}/events`}
          icon={PiListHeart}
          label="Events"
        />
        <NavigationLink
          path={`/channels/${channel.id}/settings`}
          icon={PiSliders}
          label="Settings"
        />
      </ul>
      <a ref={triggerRef as any} className="flex items-center space-x-2 m-4 font-medium">
        <PiUserCircle className="text-bunker-600 w-5 h-5" />
        <span>
          {currentUser.name}
        </span>
      </a>
    </div>
  )
}

interface NavigationItemProps {
  path: string;
  icon: ComponentType<IconBaseProps>;
  label: string;
  singular?: boolean;
}

function NavigationLink({ path, icon, label, singular }: NavigationItemProps) {
  const router = useRouter();
  const Icon = icon;
  const isActive = singular ? router.asPath === path : router.asPath.startsWith(path);

  return (
    <li>
      <Link href={path} className={cx(
          'flex items-center space-x-[0.425rem] px-[0.825rem] py-[0.525rem] rounded-xl font-medium text-[0.9rem] transition-all',
          isActive ? 'bg-bunker-50 text-purple-600' : 'text-bunker-500 hover:text-bunker-900 hover:bg-gray-50'
        )}>
        <Icon className={cx('w-5 h-5', isActive && 'text-purple-600')} />
        <span>
          {label}
        </span>
      </Link>
    </li>
  )
}
