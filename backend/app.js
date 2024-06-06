import express, { json } from 'express';
const app = express();
import taskRoutes from './routes/taskRoutes';

app.use(json());
app.use('/api', taskRoutes);

export default app;
