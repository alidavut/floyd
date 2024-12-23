import { Button as REButton, Heading as REHeading, Text as REText } from '@react-email/components';
import { ComponentProps } from 'react';

export function Button({ children, ...props }: ComponentProps<typeof REButton>) {
  return (
    <REButton
      {...props}
      className="bg-purple-600 text-white text-base font-medium rounded-sm px-4 py-2 cursor-pointer">
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
    <h1 {...props} className="text-2xl font-bold text-bunker-950">{children}</h1>
  )
}
