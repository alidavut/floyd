import { Hr, Button as REButton, Heading as REHeading, Text as REText } from '@react-email/components';
import { ComponentProps } from 'react';

export function Button({ children, ...props }: ComponentProps<typeof REButton>) {
  return (
    <REButton
      {...props}
      className="bg-purple-600 text-white text-base font-medium rounded-xl px-4 py-[0.575rem] cursor-pointer">
      {children}
    </REButton>
  )
}

export function Text({ children, ...props }: ComponentProps<typeof REText>) {
  return (
    <p {...props} className="text-base">{children}</p>
  )
}

export function Heading({ children, ...props }: ComponentProps<typeof REHeading>) {
  return (
    <h1 {...props} className="text-2xl font-semibold text-bunker-950">{children}</h1>
  )
}

export function Divider({ ...props }: ComponentProps<'hr'>) {
  return (
    <Hr {...props} />
  )
}
