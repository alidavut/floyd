import { ChannelObject } from '@floyd/schema/types';
import { useStoreContext } from 'hacksaw-react';
import { createContext, useContext } from 'react';

export function useCurrentUser() {
  const contextMap = useStoreContext('global');
  return contextMap.users.first;
}

export const ChannelContext = createContext<ChannelObject>(null);

export function useChannel() {
  return useContext(ChannelContext);
}
