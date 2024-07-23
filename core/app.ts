import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from '../routes/userRoutes';
import { errorHandler } from '../middleware/errorHandler';

const app = express();

app.use(bodyParser.json());
app.use('/api/users', userRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
