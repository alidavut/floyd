import { ComponentType } from 'react';
import { render } from '@react-email/components';

export function createRenderer<T>(Component: ComponentType<T>) {
  return (props: T) => render(<Component {...props} />);
}
