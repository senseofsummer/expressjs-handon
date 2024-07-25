import * as express from 'express';
import { json } from 'body-parser';
import userRoutes from '../routes/userRoutes';
import { errorHandler } from '../middleware/errorHandler';

const app = express();

app.use(json());
app.use('/api/users', userRoutes);

app.use(errorHandler);

export { app };
