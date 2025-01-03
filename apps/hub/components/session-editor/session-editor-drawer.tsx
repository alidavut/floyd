import { Button, Drawer } from '@floyd/ui/components';
import { SessionObject } from '@floyd/schema/types';
import { SessionEditor } from './session-editor';
import { useState } from 'react';
import { ServiceError } from 'services/errors';

interface Props {
  isOpen: boolean;
  onSubmit: (params: Partial<SessionObject>) => void;
  onClose: () => void;
  submitting: boolean;
  error: ServiceError;
}

export function SessionEditorDrawer({ isOpen, onSubmit, onClose, submitting, error }: Props) {
  const [params, setParams] = useState<Partial<SessionObject>>({});

  return (
    <Drawer isOpen={isOpen} onClose={onClose}>
      <Drawer.Header
        title="Create Session"
      />
      <Drawer.Body>
        <SessionEditor
          onValueChange={setParams}
          value={params}
          error={error}
        />
      </Drawer.Body>
      <Drawer.Footer>
        <Button onClick={() => onSubmit(params)} loading={submitting} fullWidth>
          Save
        </Button>
      </Drawer.Footer>
    </Drawer>
  )
}
