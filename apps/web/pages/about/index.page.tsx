import { withLayout } from '@floyd/ui/layout';
import { AboutView } from './view';
import { Layout } from 'components';

function About() {
  return (
    <AboutView />
  )
}

export default withLayout(Layout, { header: { position: 'absolute', transparent: true } })(About);
