import cx from 'classnames';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { PiListBold } from 'react-icons/pi';
import { useOnClickOutside } from 'usehooks-ts';
import logoDark from '@floyd/ui/assets/images/logo-dark.svg';
import logoLight from '@floyd/ui/assets/images/logo-light.svg';

interface Props {
  transparent?: boolean;
  position?: 'static' | 'absolute' | 'fixed';
  border?: boolean;
  dark?: boolean;
}

export function Header({ transparent = false, position = 'static', border=true, dark = false }: Props) {
  const [ menuOpen, setMenuOpen ] = useState(false);
  const ref = useRef(null);

  useOnClickOutside(ref, async () => {
    await new Promise(resolve => setTimeout(resolve, 100));
    setMenuOpen(false);
  });

  return (
    <div
      className={cx(
        'w-full z-40',
        position === 'absolute' ? 'h-0' : 'h-16'
      )}>
      <div className={cx(
        'z-10 w-full border-b',
        transparent ? 'bg-transparent border-transparent' : dark ? 'bg-bunker-950' : 'bg-white',
        !border && 'border-transparent',
        !transparent && border && dark && 'border-white/5',
        !transparent && border && !dark && 'border-black/5',
        position === 'fixed' ? 'fixed' : 'relative'
        )}>
        <div className="px-4 relative flex items-center justify-between space-x-4 md:space-x-6 h-16">
          <a href="/" className={cx('text-xl font-bold')}>
            <img
              src={dark ? logoLight.src : logoDark.src}
              className="h-7 w-auto"
            />
          </a>
          <div ref={ref}>
            <a
              className={cx('py-2 md:hidden', dark ? 'text-white' : 'text-gray-900')}
              onClick={() => setMenuOpen(!menuOpen)}>
              <PiListBold className="w-6 h-6" />
            </a>
            <ul
              className={cx(
                'flex flex-col md:flex-row items-center justify-center space-y-6 font-semibold right-4 absolute',
                'md:static md:bg-transparent md:shadow-none md:space-x-0.5 md:space-y-0 md:right-0 md:p-0',
                'shadow-xl p-8 rounded-sm transition-opacity',
                '[&_a]:block [&_a]:px-[1rem] [&_a]:py-[0.625rem] [&_a]:rounded-sm [&_a]:transition-all',
                menuOpen ? 'top-16 md:top-0 opacity-100' : '-top-[1000px] md:top-0 opacity-0 md:opacity-100',
                dark ? '[&_a:hover]:bg-white/5' : '[&_a:hover]:bg-gray-950/10',
                dark ? 'text-white bg-bunker-900 shadow-white/5 border-gray-700' : 'text-gray-900 bg-white border-gray-300',
              )}
              onClick={async () => {
                await new Promise(resolve => setTimeout(resolve, 100));
                setMenuOpen(false);
              }}>
              <li>
                <Link href="/about">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/pricing">
                  Pricing
                </Link>
              </li>
              <li>
                <a
                  href="https://hub.floyd.so">
                  Login
                </a>
              </li>
              <li>
                <a
                  href="https://hub.floyd.so/signup"
                  className={cx(
                    'inline-block ml-2 px-4 py-[0.575rem] rounded-full',
                    dark ? 'bg-bunker-100 text-bunker-950 hover:!bg-bunker-200' :
                      'bg-bunker-950 text-white hover:!bg-bunker-900'
                  )}>
                  Get early access
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
