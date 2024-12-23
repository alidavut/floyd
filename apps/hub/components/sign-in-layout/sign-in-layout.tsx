import { ReactNode } from 'react';
import bg1 from './images/bg1.jpg';

interface Props {
  children: ReactNode;
}

export function SignInLayout({ children }: Props) {
  return (
    <div className="flex relative">
      <div className="w-1/3 px-4">
        {children}
      </div>
      <div className="fixed w-2/3 left-1/3 top-0 bottom-0 h-screen">
        <div
          style={{ backgroundImage: `url(${bg1.src})` }}
          className="absolute inset-2 bg-cover bg-center border-[8px] border-black rounded-sm"
        />
      </div>
    </div>
  )
}
