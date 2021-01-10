import { Router } from 'express';

import {
  createTodo,
  updateTodo,
  getAllTodo,
  getTodoById,
  deleteTodo,
} from '../controllers/todos';

const route = Router();
route.get('/', getAllTodo);
route.post('/', createTodo);
route.get('/:id', getTodoById);
route.put('/:id', updateTodo);
route.delete('/:id', deleteTodo);

export default route;
