import { withLayout } from '@floyd/ui/layout';
import { HomeView } from './view';
import { Layout } from 'components';

function Home() {
  return (
    <HomeView
    />
  )
}

export default withLayout(Layout, { header: { position: 'absolute', transparent: true } })(Home);
