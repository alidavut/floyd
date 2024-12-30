import { withLayout } from '@floyd/ui/layout';
import { UseCasePageView } from './view';
import { Layout } from 'components';
import { contents } from './contents';

function UseCasePage({ content }) {
  return (
    <UseCasePageView
      content={content}
    />
  )
}

UseCasePage.getInitialProps = async ({ query }) => {
  const { page } = query;

  if (!contents[page]) {
    return { notFound: true };
  }

  return { content: contents[page] };
}

export default withLayout(Layout)(UseCasePage);
