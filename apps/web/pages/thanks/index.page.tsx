import { withLayout } from '@floyd/ui/layout';
import { ThanksView } from './view';
import { Layout } from 'components';

function Thanks() {
  return (
    <ThanksView
    />
  )
}

export default withLayout(Layout, { header: { transparent: true } })(Thanks);
