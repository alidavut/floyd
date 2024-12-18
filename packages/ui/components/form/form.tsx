import { ReactElement, ReactNode } from 'react';

interface Props extends React.FormHTMLAttributes<HTMLFormElement> {
  onSubmit?: () => void;
  children: ReactNode;
}

export function Form({ onSubmit, children, ...rest }: Props): ReactElement {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit?.();
  }

  return (
    <form onSubmit={handleSubmit} {...rest}>
      {children}
    </form>
  )
}
