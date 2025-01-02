import { SpaceObject } from '@floyd/schema/types';
import { useStoreContext } from 'hacksaw-react';
import { createContext, useContext } from 'react';

export function useCurrentUser() {
  const contextMap = useStoreContext('global');
  return contextMap.users.first;
}

export const SpaceContext = createContext<SpaceObject>(null);

export function useSpace() {
  return useContext(SpaceContext);
}
