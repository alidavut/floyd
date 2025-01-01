import { PostObject } from 'lib/hygraph';
import { format } from 'date-fns';
import Markdown from 'react-markdown';
import { Head } from 'components';
import { GetStarted } from 'pages/home/partials';

interface Props {
  post: PostObject;
}

export function BlogPostView({ post }: Props) {
  return (
    <div>
      <Head
        title={post.title}
      />
      <div className="bg-bunker-950">
        <div className="container grid md:grid-cols-8 md:gap-24 py-8 pt-20 md:py-24 md:pt-28">
          <div className="flex flex-col col-span-5">
            <h1 className="text-4xl md:text-[2.75rem] leading-tight text-white font-semibold mb-4 font-serif">
              {post.title}
            </h1>
            <p className="text-bunker-200 flex-1 mb-8 text-base md:text-xl">
              {post.description}
            </p>
            <p className="space-y-2">
              <span className="block text-bunker-400 font-sans font-medium text-sm">Published</span>
              <span className="text-white">{format(new Date(post.date), 'PP')}</span>
            </p>
          </div>
          <div className="hidden md:block md:col-span-3">
            <img
              src={post.image?.url}
              className="hidden md:block rounded-sm aspect-square object-cover"
              alt={post.title}
            />
          </div>
        </div>
      </div>
      <div className="container py-16 md:py-20">
        <Markdown className="prose md:prose-lg prose-purple">
          {post.content}
        </Markdown>
      </div>
    </div>
  );
}
