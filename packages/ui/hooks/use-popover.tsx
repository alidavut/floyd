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
    const ref = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const { width: windowWidth, height: windowHeight } = useWindowDimensions();
    const [style, setStyle] = useState<{ top?: number; left?: number; opacity: number }>({ opacity: 0 });

    const position = options?.position || 'bottom';
    const alignment = options?.alignment || 'start';

    useEffect(() => {
      if (!contentRef.current) return;

      const contentWidth = contentRef.current.offsetWidth;
      const contentHeight = contentRef.current.offsetHeight;
      const targetWidth = target.offsetWidth;
      const targetHeight = target.offsetHeight;
      const targetRect = target.getBoundingClientRect();

      const allowedOrientations = [
        { pos: 'top', align: 'start', allowed: targetRect.top - contentHeight > 0 && targetRect.left + contentWidth < windowWidth },
        { pos: 'top', align: 'center', allowed: targetRect.top - contentHeight > 0 && targetRect.left + contentWidth / 2 < windowWidth },
        { pos: 'top', align: 'end', allowed: targetRect.top - contentHeight > 0 && targetRect.right - contentWidth > 0 },
        { pos: 'bottom', align: 'start', allowed: targetRect.bottom + contentHeight < windowHeight && targetRect.left + contentWidth < windowWidth },
        { pos: 'bottom', align: 'center', allowed: targetRect.bottom + contentHeight < windowHeight && targetRect.left + contentWidth / 2 < windowWidth },
        { pos: 'bottom', align: 'end', allowed: targetRect.bottom + contentHeight < windowHeight && targetRect.right - contentWidth > 0 },
        { pos: 'left', align: 'start', allowed: targetRect.left - contentWidth > 0 && targetRect.top + contentHeight < windowHeight },
        { pos: 'left', align: 'center', allowed: targetRect.left - contentWidth > 0 && targetRect.top + contentHeight / 2 < windowHeight },
        { pos: 'left', align: 'end', allowed: targetRect.left - contentWidth > 0 && targetRect.bottom - contentHeight > 0 },
        { pos: 'right', align: 'start', allowed: targetRect.right + contentWidth < windowWidth && targetRect.top + contentHeight < windowHeight },
        { pos: 'right', align: 'center', allowed: targetRect.right + contentWidth < windowWidth && targetRect.top + contentHeight / 2 < windowHeight },
        { pos: 'right', align: 'end', allowed: targetRect.right + contentWidth < windowWidth && targetRect.bottom - contentHeight > 0 },
      ];

      const orientation = allowedOrientations.find(o => o.pos === position && o.align === alignment && o.allowed) ||
                          allowedOrientations.find(o => o.allowed);

      const { pos: finalPos = 'bottom', align: finalAlign = 'start' } = orientation || {};

      const stylePosition = calculatePosition(finalPos, finalAlign, {
        contentWidth, contentHeight, targetRect, targetWidth, targetHeight
      });

      setStyle({ ...stylePosition, opacity: 1 });
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
    );
  });

  function handleClick(event: MouseEvent) {
    if (triggerRef.current?.contains(event.target as Node)) {
      isOpen ? close() : open({ target: triggerRef.current });
    }
  }

  useEventListener(global.document, 'click', handleClick as EventListener);

  return { triggerRef, isOpen, close };
}

function calculatePosition(
  position: string,
  alignment: string,
  { contentWidth, contentHeight, targetRect, targetWidth, targetHeight }:
  { contentWidth: number; contentHeight: number; targetRect: DOMRect; targetWidth: number; targetHeight: number; }
) {
  let top = 0;
  let left = 0;

  if (position === 'top') {
    top = targetRect.top - contentHeight;
  } else if (position === 'bottom') {
    top = targetRect.bottom;
  } else if (position === 'left') {
    left = targetRect.left - contentWidth;
  } else if (position === 'right') {
    left = targetRect.right;
  }

  if (alignment === 'start') {
    if (position === 'top' || position === 'bottom') {
      left = targetRect.left;
    } else {
      top = targetRect.top;
    }
  } else if (alignment === 'center') {
    if (position === 'top' || position === 'bottom') {
      left = targetRect.left + targetWidth / 2 - contentWidth / 2;
    } else {
      top = targetRect.top + targetHeight / 2 - contentHeight / 2;
    }
  } else if (alignment === 'end') {
    if (position === 'top' || position === 'bottom') {
      left = targetRect.right - contentWidth;
    } else {
      top = targetRect.bottom - contentHeight;
    }
  }

  return { top, left };
}
