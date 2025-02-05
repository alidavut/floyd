import { ReactNode, createContext, useContext, useEffect, useState } from 'react'
import { Overlay } from '../overlay/overlay';
import { PiXBold } from 'react-icons/pi';
import cx from 'classnames';
import { createPortal } from 'react-dom';

interface Props {
  isOpen: boolean;
  children: ReactNode;
  onClose?: () => void;
}

const Context = createContext(null);

export function Drawer({ isOpen, children, onClose }: Props) {
  const [isMounted, setIsMounted] = useState(false);

  function handleClose() {
    setIsMounted(false);
    setTimeout(() => onClose(), 300);
  }

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  return isOpen && createPortal(
    <div className="fixed inset-0 z-50">
      <Overlay active={isMounted} onClick={handleClose} />
      <div className={cx(
          'fixed flex flex-col top-3 bottom-3 right-0 rounded-tl-sm rounded-bl-sm overflow-hidden shadow',
          isMounted ? 'animate-drop-in-from-right' : 'animate-drop-out-to-right'
        )}>
        <Context.Provider value={{ onClose: handleClose }}>
          {children}
        </Context.Provider>
      </div>
    </div>,
    document.body
  )
}

interface HeaderProps {
  title: string;
}

function Header({ title }: HeaderProps) {
  const { onClose } = useContext(Context);

  return (
    <div className="flex justify-between items-center p-4 bg-white border-b border-gray-100">
      <span className="text-lg font-semibold">{title}</span>
      <a onClick={onClose}>
        <PiXBold />
      </a>
    </div>
  )
}

interface BodyProps {
  children: ReactNode;
}

function Body({ children }: BodyProps) {
  return (
    <div className="flex-1 bg-white overflow-auto w-96">
      <div className="m-4">
        {children}
      </div>
    </div>
  )
}

interface FooterProps {
  children: ReactNode;
}

function Footer({ children }: FooterProps) {
  return (
    <div className="flex justify-end items-center p-4 bg-white border-t border-gray-100">
      {children}
    </div>
  )
}

Drawer.Header = Header;
Drawer.Body = Body;
Drawer.Footer = Footer;
