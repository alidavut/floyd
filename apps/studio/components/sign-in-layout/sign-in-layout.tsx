import { ReactNode } from 'react';

interface Props {
  background: string;
  children?: ReactNode;
}

export function SignInLayout({ background, children }: Props) {
  return (
    <div className="flex relative">
      <div className="w-full md:w-[40%] px-4">
        {children}
      </div>
      <div className="hidden md:block md:fixed w-[60%] left-[40%] top-0 bottom-0 h-screen">
        <div
          style={{ backgroundImage: `url(${background})` }}
          className="absolute inset-2 bg-cover bg-center border-[8px] border-black rounded-2xl"
        />
      </div>
    </div>
  )
}
