import { withLayout } from '@floyd/ui/layout';
import { Layout } from 'components';
import { BlogPostView } from './view';
import { PostObject, hygraph } from 'lib/hygraph';

function BlogPost({ post }: { post: PostObject }) {
  return (
    <BlogPostView
      post={post}
    />
  )
}

BlogPost.getInitialProps = async ({ query: { slug } }) => {
  const query = `
    query Posts {
      post(where: { slug: "${slug}" }) {
        id
        title
        slug
        description
        content
        date
        image {
          url
        }
      }
    }
  `;

  const { post } = await hygraph.request<{ post: PostObject }>(query);

  return {
    post
  };
};

export default withLayout(Layout, { header: { transparent: true, dark: true, position: 'absolute' } })(BlogPost);
