const pool = require('../config/database');

const createTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS tasks (
      id SERIAL PRIMARY KEY,
      titulo VARCHAR(255) NOT NULL,
      descricao TEXT,
      status VARCHAR(50) NOT NULL DEFAULT 'Pendente',
      data_vencimento DATE
    )
  `;
  await pool.query(query);
};

createTable();

const getAllTasks = async () => {
  const { rows } = await pool.query('SELECT * FROM tasks');
  return rows;
};

const getTaskById = async (id) => {
  const { rows } = await pool.query('SELECT * FROM tasks WHERE id = $1', [id]);
  return rows[0];
};

const createTask = async (task) => {
  const { rows } = await pool.query(
    'INSERT INTO tasks (titulo, descricao, status, data_vencimento) VALUES ($1, $2, $3, $4) RETURNING *',
    [task.titulo, task.descricao, task.status, task.data_vencimento]
  );
  return rows[0];
};

const updateTask = async (id, task) => {
  const { rows } = await pool.query(
    'UPDATE tasks SET titulo = $1, descricao = $2, status = $3, data_vencimento = $4 WHERE id = $5 RETURNING *',
    [task.titulo, task.descricao, task.status, task.data_vencimento, id]
  );
  return rows[0];
};

const deleteTask = async (id) => {
  await pool.query('DELETE FROM tasks WHERE id = $1', [id]);
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
