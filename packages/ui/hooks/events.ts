import { useEffect, useState } from 'react';

export function useEventListener(target: EventTarget, type: string, listener: EventListenerOrEventListenerObject,
  options?: boolean | AddEventListenerOptions) {
  useEffect(() => {
    target.addEventListener(type, listener, options);

    return () => {
      target.removeEventListener(type, listener, options);
    };
  }, [target, type, listener, options]);
}

export function useOnClickOutside(refs: React.RefObject<HTMLElement>[], handler: Function) {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      const isOutside = refs.every(ref => {
        return !ref.current?.contains(event.target as Node);
      });

      if (isOutside) {
        handler(event);
      }
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [refs, handler]);
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return { width, height };
  }

  useEventListener(window, 'resize', () => {
    setWindowDimensions(getWindowDimensions());
  });

  return windowDimensions;
}
