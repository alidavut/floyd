import { ReactElement, ReactNode } from 'react';
import { useRouter } from 'next/router';
import { withLayout } from '@floyd/ui/layout';
import { SpaceLayout } from '../space-layout/space-layout';
import { TabItem, Tabs } from '@floyd/ui/components';
import { PageHeader } from 'components/page-header/page-header';
import { createStoreContextMap, useStoreContext } from 'hacksaw-react';
import { services } from 'services';

interface Props {
  children?: ReactNode;
}

export function EventLayoutComponent({ children }: Props): ReactElement {
  const router = useRouter();

  const spaceId = router.query.spaceId as string;
  const eventId = router.query.eventId as string;

  const contextMap = useStoreContext('event-dashboard', eventId);

  const dashboardUrl = `/spaces/${spaceId}/events/${eventId}`;
  const editUrl = `/spaces/${spaceId}/events/${eventId}/edit`;

  return (
    <div className="container py-15">
      <div className="max-w-4xl mx-auto">
        <PageHeader
          title={contextMap.events.first?.title || 'Create Event'}
          className="mb-6"
        />
        {eventId && (
          <Tabs className="mb-6">
            <TabItem href={dashboardUrl} active={router.asPath === dashboardUrl}>
              Dashboard
            </TabItem>
            <TabItem href={editUrl} active={router.asPath === editUrl}>
              Edit
            </TabItem>
          </Tabs>
        )}
        {children}
      </div>
    </div>
  )
}

EventLayoutComponent.getInitialProps = async ({ storeMap, query }) => {
  if (query.eventId) {
    const contextMap = createStoreContextMap(storeMap, 'event-layout', query.eventId);
    await services.event.get({ id: query.eventId }, { contextMap });
  }
}

export const EventLayout = withLayout(SpaceLayout)(EventLayoutComponent);
