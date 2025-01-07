import { withLayout } from '@floyd/ui/layout';
import { PricingView } from './view';
import { Layout } from 'components';

function Pricing() {
  return (
    <PricingView
    />
  )
}

export default withLayout(Layout, { header: { position:'absolute', transparent: true, dark: true} })(Pricing);
