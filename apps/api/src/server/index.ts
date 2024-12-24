import { initializeDataSource } from 'lib/data-source';

async function run() {
  await initializeDataSource();
  const { default: app } = await import('./app');
  const port = process.env.PORT || 3001;
  app.listen(port, () => console.log(`Server started at ${port}`));
}

run();
