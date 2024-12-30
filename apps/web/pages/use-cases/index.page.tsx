import { withLayout } from '@floyd/ui/layout';
import { UseCasesView } from './view';
import { Layout } from 'components';
import { contents } from '../use-case-page/contents';

function UseCases() {
  return (
    <UseCasesView
      contents={contents}
    />
  )
}

export default withLayout(Layout)(UseCases);
