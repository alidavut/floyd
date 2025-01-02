import { ComponentType, ReactElement, ReactNode, createContext, useContext, useState } from 'react';
import { nanoid } from 'nanoid';

export const PortalContext = createContext(null);

export function PortalProvider({ children }: { children: ReactNode }): ReactElement {
  const [items, setItems] = useState({});

  function handleOpen(id: string, children: ReactNode) {
    setItems({ ...items, [id]: children });
  }

  function handleClose(id: string) {
    delete items[id];
    setItems({ ...items });
  }

  return (
    <PortalContext.Provider value={{ open: handleOpen, close: handleClose }}>
      {children}
      {Object.values(items)}
    </PortalContext.Provider>
  )
}

export function usePortal<T>(Component: ComponentType<T>) {
  const context = useContext(PortalContext);
  const [isOpen, setIsOpen] = useState(false);
  const [id] = useState(nanoid());

  return {
    open: (props?: T) => {
      context.open(id, <Component {...props} />);
      setIsOpen(true);
    },
    close: () => {
      context.close(id)
      setIsOpen(false);
    },
    isOpen
  }
}

export function withPortalProvider<T>(Component: ComponentType<T>): ComponentType<any> {
  return function WithPortalProvider(props: T): ReactElement {
    return (
      <PortalProvider>
        <Component {...props} />
      </PortalProvider>
    )
  }
}
