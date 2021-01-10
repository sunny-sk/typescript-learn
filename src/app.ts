import express, { Request, Response, NextFunction } from 'express';
const app = express();

import todoRouter from './routes/todos';

app.use('/api/v1/todo', todoRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

app.listen(3000, () => {
  console.log('server started');
});
