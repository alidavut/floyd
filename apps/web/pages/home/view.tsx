import { Head } from 'components';
import { Cover, Features, Flow, GetStarted } from './partials';

export function HomeView() {
  return (
    <div>
      <Head
        title="Floyd - Streaming mastery, made for frontiers"
        description="Floyd provides a platform to host live experiences, sell tickets, and engage your audience—all in
          one place. Monetize your expertise and creativity with ease."
        titlePure
      />
      <Cover />
      <Flow />
      <Features />
      <GetStarted />
    </div>
  )
}
