import { getAllTasks as _getAllTasks, getTaskById as _getTaskById, createTask as _createTask, updateTask as _updateTask, deleteTask as _deleteTask } from '../models/task';

export async function getAllTasks(req, res) {
  const tasks = await _getAllTasks();
  res.json(tasks);
}
export async function getTaskById(req, res) {
  const task = await _getTaskById(req.params.id);
  res.json(task);
}
export async function createTask(req, res) {
  const newTask = await _createTask(req.body);
  res.status(201).json(newTask);
}
export async function updateTask(req, res) {
  const updatedTask = await _updateTask(req.params.id, req.body);
  res.json(updatedTask);
}
export async function deleteTask(req, res) {
  await _deleteTask(req.params.id);
  res.status(204).send();
}
