import { ComponentType } from 'react';

export function createPreview<T>(Component: ComponentType<T>, props: T) {
  return () => <Component {...props} />;
}
