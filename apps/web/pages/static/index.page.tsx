import { withLayout } from '@floyd/ui/layout';
import { StaticView } from './view';
import { useRouter } from 'next/router';
import { Layout } from 'components';

function Static() {
  const router = useRouter();

  return (
    <StaticView
      page={router.asPath.replace('/about/', '')}
    />
  )
}

export default withLayout(Layout)(Static);
