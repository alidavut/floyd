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
  dark?: boolean;
}

export function Header({ transparent = false, position = 'static', dark = false }: Props) {
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
        transparent ? 'bg-transparent border-transparent' : dark ? 'bg-gray-900 border-white/5' : 'bg-white border-black/5',
        position === 'fixed' ? 'fixed' : 'relative'
        )}>
        <div className="container relative flex items-center justify-between space-x-4 md:space-x-6 h-16">
          <a href="/" className={cx('text-xl font-bold')}>
            <img
              src={dark ? logoLight.src : logoDark.src}
              className="h-4 w-auto"
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
                'flex flex-col md:flex-row items-center justify-center space-y-6 font-bold right-4 absolute',
                'text-[0.875rem]',
                'md:static md:bg-transparent md:shadow-none md:space-x-1.5 md:space-y-0 md:right-0 md:p-0',
                'shadow-xl p-8 rounded-md transition-opacity border md:border-none',
                '[&_a]:block [&_a]:px-[0.6rem] [&_a]:py-[0.375rem] [&_a]:rounded-md [&_a]:transition-all',
                '[&>li:last-child>a]:py-[0.3rem]',
                menuOpen ? 'top-16 md:top-0 opacity-100' : '-top-[1000px] md:top-0 opacity-0 md:opacity-100',
                dark ? '[&_a:hover]:bg-white/5' : '[&_a:hover]:bg-black/5',
                dark ? 'text-white bg-gray-900 shadow-white/5 border-gray-700' : 'text-gray-900 bg-white border-gray-300',
              )}
              onClick={async () => {
                await new Promise(resolve => setTimeout(resolve, 100));
                setMenuOpen(false);
              }}>
              <li>
                <Link href="/about">
                  About Us
                </Link>
              </li>
              <li>
                <a
                  href="https://dash.floyd.so"
                  target="_blank"
                  rel="noreferrer">
                  Login
                </a>
              </li>
              <li>
                <a
                  href="https://tally.so/r/mRBgXP"
                  target="_blank"
                  rel="noreferrer"
                  className={cx(
                    'border-[1.5px] inline-block ml-2',
                    dark ? 'border-white text-white' : 'border-gray-900 text-gray-900'
                  )}>
                  Request Demo
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
