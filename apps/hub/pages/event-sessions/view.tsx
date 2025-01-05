import { SessionObject } from '@floyd/schema/types'
import { SessionEditorDrawer } from 'components';
import { useState } from 'react';
import { ServiceError } from 'services/errors';
import { Calendar, DateSlot } from './partials';
import { format } from 'date-fns';

interface Props {
  sessions: SessionObject[];
  onSubmit: (params: { startsAt: string }) => Promise<void>;
  submitting: boolean;
  error: ServiceError;
}

export function EventSessionsView({ sessions, onSubmit, submitting, error }: Props) {
  const [editorOpen, setEditorOpen] = useState(false);
  const [params, setParams] = useState<Partial<SessionObject>>({});

  const groupedSessions = sessions.reduce((acc, session) => {
    const date = new Date(session.startsAt).toDateString();
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(session);
    return acc;
  }, {} as Record<string, SessionObject[]>);

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

      <div className="flex items-start space-x-6">
        <div className="w-80 bg-white rounded-sm p-6">
          <Calendar
            onSelect={(date) => {
              setParams({ startsAt: date });
              setEditorOpen(true);
            }}
          />
        </div>
        <div className="flex-1">
          {Object.entries(groupedSessions).map(([date, sessions]) => (
            <div key={date}>
              <DateSlot date={date} times={sessions.map((session) => format(session.startsAt, 'HH:mm'))} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
