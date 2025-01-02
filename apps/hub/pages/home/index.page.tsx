import { createStoreContextMap } from 'hacksaw-react';
import { services } from 'services';
import { redirect } from 'lib/navigation';
import { withAuth } from 'lib/authentication';

function Home() {
  return null;
}

Home.getInitialProps = async ({ storeMap, res }) => {
  const contextMap = createStoreContextMap(storeMap, 'home');
  await services.space.list(null, { contextMap });

  const space = contextMap.spaces.first;

  if (space) {
    redirect(`/spaces/${space.id}`, res);
  } else {
    redirect('/spaces/new', res);
  }

  return {};
}

export default withAuth(Home);
