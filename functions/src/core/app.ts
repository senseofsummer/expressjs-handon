import { json } from 'body-parser';
import userRoutes from '../routes/userRoutes';
import { errorHandler } from '../middleware/errorHandler';
import express, { Request, Response } from 'express';

const app = express();

app.use(json());
app.use('/api/users', userRoutes);
app.post('/login', async (req: Request, res: Response) => {
    try {
      res.send('Login function is working!');
    } catch (error) {
      res.status(500).send('Internal Server Error');
    }
  });

app.use(errorHandler);

export { app };
