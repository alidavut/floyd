import { createStoreContextMap } from 'hacksaw-react';
import { services } from 'services';
import { redirect } from 'lib/navigation';
import { withAuth } from 'lib/authentication';

function Home() {
  return null;
}

Home.getInitialProps = async ({ storeMap, res }) => {
  const contextMap = createStoreContextMap(storeMap, 'home');
  await services.channel.list(null, { contextMap });

  const channel = contextMap.channels.first;

  if (channel) {
    redirect(`/channels/${channel.id}`, res);
  } else {
    redirect('/channels/new', res);
  }

  return {};
}

export default withAuth(Home);
