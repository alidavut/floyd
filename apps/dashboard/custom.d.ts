import { UserObject } from '@floyd/schema/types';
import { StoreMap } from './store';
import { StoreContextMap } from 'hacksaw-react';

declare module 'hacksaw-react' {
  export function useStoreContext(...args: unknown[]): StoreContextMap<StoreMap>;
  export function createStoreContextMap(storeMap: StoreMap, ...args: unknown[]): StoreContextMap<StoreMap>;
}

declare module 'next' {
  interface NextPageContext {
    storeMap: StoreMap;
    currentUser: UserObject;
  }
}
