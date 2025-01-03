import { EventObject, SpaceObject } from '@floyd/schema/types';
import { Button, Table, TableColumn } from '@floyd/ui/components';
import { PageHeader } from 'components';
import Link from 'next/link';

interface Props {
  space: SpaceObject;
  events: EventObject[];
}

export function SpaceEventsView({ space, events }: Props) {
  const columns: TableColumn[] = [
    {
      label: 'Title',
      key: 'title',
    },
    {
      label: 'Create Date',
      key: 'createdAt',
      format: 'datetime'
    },
    {
      label: 'Actions',
      key: 'id',
      render: (event: EventObject) => (
        <Link href={`/spaces/${space.id}/events/${event.id}`}>
          <Button size="small">
            Edit
          </Button>
        </Link>
      )
    }
  ];

  return (
    <div className="container max-w-4xl space-y-6 py-12">
      <PageHeader
        title="Events"
        actions={(
          <Link href={`/spaces/${space.id}/events/new`}>
            <Button>
              Create Event
            </Button>
          </Link>
        )}
      />
      <div className="p-6 bg-white rounded-sm space-y-6">
        <Table
          columns={columns}
          data={events}
        />
      </div>
    </div>
  )
}
