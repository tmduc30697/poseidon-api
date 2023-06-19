import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port: number = 3000;

app.get('/', function (req: Request, res: Response): void {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
