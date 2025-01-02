import React, { ComponentType, useEffect, useRef, useState } from 'react';
import { useEventListener, useOnClickOutside, useWindowDimensions } from './events';
import { Overlay, usePortal } from '../components';

interface Options {
  position?: 'top' | 'bottom' | 'left' | 'right';
  alignment?: 'start' | 'center' | 'end';
  overlay?: boolean;
}

export function usePopover(Component: ComponentType, options?: Options) {
  const triggerRef = useRef<HTMLElement>(null);
  const { open, close, isOpen } = usePortal(({ target }: { target: HTMLElement }) => {
    const ref = useRef(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const { width: windowWidth, height: windowHeight } = useWindowDimensions();
    const [style, setStyle] = useState<{ top?: number; left?: number; right?: number; bottom?: number, opacity: number }>({
      opacity: 0
    });

    const position = options?.position || 'bottom';
    const alignment = options?.alignment || 'start';

    useEffect(() => {
      if (!contentRef.current) {
        return;
      }

      const contentWidth = contentRef.current.offsetWidth;
      const contentHeight = contentRef.current.offsetHeight;
      const targetWidth = target.offsetWidth;
      const targetHeight = target.offsetHeight;
      const targetPosition = target.getBoundingClientRect();

      const allowedOrientations = [
        ['top', 'start', targetPosition.top - contentHeight > 0 && targetPosition.left + contentWidth < windowWidth],
        ['top', 'center', targetPosition.top - contentHeight > 0 && targetPosition.left - contentWidth / 2 > 0 && targetPosition.left + contentWidth / 2 < windowWidth],
        ['top', 'end', targetPosition.top - contentHeight > 0 && targetPosition.right - contentWidth > 0],
        ['bottom', 'start', targetPosition.bottom + contentHeight < windowHeight && targetPosition.left + contentWidth < windowWidth],
        ['bottom', 'center', targetPosition.bottom + contentHeight < windowHeight && targetPosition.left - contentWidth / 2 > 0 && targetPosition.left + contentWidth / 2 < windowWidth],
        ['bottom', 'end', targetPosition.bottom + contentHeight < windowHeight && targetPosition.right - contentWidth > 0],
        ['left', 'start', targetPosition.left - contentWidth > 0 && targetPosition.top + contentHeight < windowHeight],
        ['left', 'center', targetPosition.left - contentWidth > 0 && targetPosition.top - contentHeight / 2 > 0 && targetPosition.top + contentHeight / 2 < windowHeight],
        ['left', 'end', targetPosition.left - contentWidth > 0 && targetPosition.bottom - contentHeight > 0],
        ['right', 'start', targetPosition.right + contentWidth < windowWidth && targetPosition.top + contentHeight < windowHeight],
        ['right', 'center', targetPosition.right + contentWidth < windowWidth && targetPosition.top - contentHeight / 2 > 0 && targetPosition.top + contentHeight / 2 < windowHeight],
        ['right', 'end', targetPosition.right + contentWidth < windowWidth && targetPosition.bottom - contentHeight > 0]
      ];

      const orientation = allowedOrientations.find(([p, a, allowed]) => p === position && a === alignment && allowed) ||
        allowedOrientations.find(([,, allowed]) => allowed);

      const [newPosition, newAlignment] = orientation as any;

      let top = 0;
      let left = 0;
      let bottom = 0;
      let right = 0;

      if (newPosition === 'top') {
        top = target.offsetTop - contentHeight;
      } else if (newPosition === 'bottom') {
        top = target.offsetTop + targetHeight;
      } else if (newPosition === 'left') {
        left = target.offsetLeft - contentWidth;
      } else if (newPosition === 'right') {
        left = target.offsetLeft + targetWidth;
      }

      if (newAlignment === 'start') {
        if (newPosition === 'top' || newPosition === 'bottom') {
          left = target.offsetLeft;
        } else if (newPosition === 'left' || newPosition === 'right') {
          top = target.offsetTop;
        }
      } else if (newAlignment === 'center') {
        if (newPosition === 'top' || newPosition === 'bottom') {
          left = target.offsetLeft + (targetWidth / 2) - (contentWidth / 2);
        } else if (newPosition === 'left' || newPosition === 'right') {
          top = target.offsetTop + (targetHeight / 2) - (contentHeight / 2);
        }
      } else if (newAlignment === 'end') {
        if (newPosition === 'top' || newPosition === 'bottom') {
          left = target.offsetLeft + targetWidth - contentWidth;
        } else if (newPosition === 'left' || newPosition === 'right') {
          top = target.offsetTop + targetHeight - contentHeight;
        }
      }

      setStyle({ top, left, bottom, right, opacity: 1 });
    }, [windowWidth, windowHeight, contentRef.current]);


    useOnClickOutside([ref, triggerRef], close);

    return (
      <div ref={ref} className="fixed z-50">
        {options?.overlay && <Overlay onClick={close} />}
        <div className="fixed z-50 transition-all" style={style}>
          <div ref={contentRef} className="inline-block">
            <Component />
          </div>
        </div>
      </div>
    )
  });

  function handleClick(event: MouseEvent) {
    if (triggerRef.current && triggerRef.current.contains(event.target as Node)) {
      if (isOpen) {
        close();
      } else {
        open({ target: triggerRef.current });
      }
    }
  }

  useEventListener(global.document, 'click', handleClick as EventListener);

  return {
    triggerRef,
    isOpen,
    close
  }
}
