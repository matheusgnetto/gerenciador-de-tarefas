import { query as _query } from '../config/database';

const createTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS tasks (
      id SERIAL PRIMARY KEY,
      titulo VARCHAR(255) NOT NULL,
      descricao TEXT,
      status VARCHAR(50) NOT NULL DEFAULT 'pendente',
      data_vencimento DATE
    )
  `;
  await _query(query);
};

createTable();

export async function getAllTasks() {
  const result = await _query('SELECT * FROM tasks');
  return result.rows;
}
export async function getTaskById(id) {
  const result = await _query('SELECT * FROM tasks WHERE id = $1', [id]);
  return result.rows[0];
}
export async function createTask(task) {
  const result = await _query(
    'INSERT INTO tasks (titulo, descricao, status, data_vencimento) VALUES ($1, $2, $3, $4) RETURNING *',
    [task.titulo, task.descricao, task.status, task.data_vencimento]
  );
  return result.rows[0];
}
export async function updateTask(id, task) {
  const result = await _query(
    'UPDATE tasks SET titulo = $1, descricao = $2, status = $3, data_vencimento = $4 WHERE id = $5 RETURNING *',
    [task.titulo, task.descricao, task.status, task.data_vencimento, id]
  );
  return result.rows[0];
}
export async function deleteTask(id) {
  await _query('DELETE FROM tasks WHERE id = $1', [id]);
}
