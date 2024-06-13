const Task = require('../models/task');

const getAllTasks = async (req, res) => {
  const tasks = await Task.getAllTasks();
  res.json(tasks);
};

const getTaskById = async (req, res) => {
  const task = await Task.getTaskById(req.params.id);
  res.json(task);
};

const createTask = async (req, res) => {
  const newTask = await Task.createTask(req.body);
  res.status(201).json(newTask);
};

const updateTask = async (req, res) => {
  const updatedTask = await Task.updateTask(req.params.id, req.body);
  res.json(updatedTask);
};

const deleteTask = async (req, res) => {
  await Task.deleteTask(req.params.id);
  res.status(204).send();
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};