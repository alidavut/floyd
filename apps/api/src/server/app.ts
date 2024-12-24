import express, { Express } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import router from './router';

const app: Express = express();

app.use(cors());

app.use(bodyParser.json());

app.get('/', (_, res) => res.send({ name: 'Floyd API', time: new Date() }));
app.use('/v1', router);

app.use((err: Error, _: express.Request, res: express.Response, __: express.NextFunction) => {
  if (process.env.NODE_ENV === 'production') {
    res.status(500).json({ message: 'Internal server error' });
  } else {
    console.log(err);
    res.status(500).json([err, err.stack]);
  }
});

export default app;
