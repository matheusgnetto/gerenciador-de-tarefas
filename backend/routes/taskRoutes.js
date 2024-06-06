import { Router } from 'express';
const router = Router();
import { getAllTasks, getTaskById, createTask, updateTask, deleteTask } from '../controllers/taskController';

router.get('/tasks', getAllTasks);
router.get('/tasks/:id', getTaskById);
router.post('/tasks', createTask);
router.put('/tasks/:id', updateTask);
router.delete('/tasks/:id', deleteTask);

export default router;
