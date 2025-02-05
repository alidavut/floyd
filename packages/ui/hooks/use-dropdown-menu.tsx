import React from 'react';
import { Card } from '../components';
import { usePopover } from './use-popover';

interface Props {
  items: { label: string; onClick: () => void }[];
}

export function useDropdownMenu({ items }: Props) {
  const { triggerRef, isOpen } = usePopover(() => {
    return (
      <Card>
        <Card.Body>
          <ul className="space-y-2">
            {items.map(item => (
              <li key={item.label} className="flex items-center space-x-2">
                <button onClick={item.onClick}>{item.label}</button>
              </li>
            ))}
          </ul>
        </Card.Body>
      </Card>
    )
  });

  return {
    triggerRef,
    isOpen
  }
}
