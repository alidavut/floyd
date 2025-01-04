import { SessionObject } from '@floyd/schema/types'
import { Button } from '@floyd/ui/components';
import { SessionEditorDrawer } from 'components';
import { useState } from 'react';
import { ServiceError } from 'services/errors';

interface Props {
  sessions: SessionObject[];
  onSubmit: (params: { startsAt: string }) => Promise<void>;
  submitting: boolean;
  error: ServiceError;
}

export function EventSessionsView({ sessions, onSubmit, submitting, error }: Props) {
  const [editorOpen, setEditorOpen] = useState(false);

  async function handleSubmit(params: { startsAt: string }) {
    try {
      await onSubmit(params);
      setEditorOpen(false);
    } catch (error) {
    }
  }

  return (
    <div>
      <SessionEditorDrawer
        isOpen={editorOpen}
        onSubmit={handleSubmit}
        onClose={() => setEditorOpen(false)}
        submitting={submitting}
        error={error}
      />

      <h1>Sessions</h1>
      <ul>
        {sessions.map(session => (
          <li key={session.id}>
            <h2>{session.startsAt}</h2>
          </li>
        ))}
      </ul>
      <Button onClick={() => setEditorOpen(true)}>
        Create Session
      </Button>
    </div>
  )
}
