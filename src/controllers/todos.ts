import { Request, Response, NextFunction, RequestHandler } from 'express';

const AllTODOS: { id: string; text: string }[] = [];

export const createTodo = (req: Request, res: Response, next: NextFunction) => {
  const text = (req.body as { text: string }).text;
  AllTODOS.push({ id: Math.random().toString(), text });
};
export const deleteTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const todoId = req.params.id;
  const todoIndex = AllTODOS.findIndex((todo) => todo.id === todoId);
  if (todoIndex < 0) {
    throw new Error('not found');
  }
  AllTODOS.splice(todoIndex, 1);
  res.send(200).send({ message: 'todo deleted' });
};
export const updateTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const todoId = req.params.id;
  const updatedText = (req.body as { text: string }).text;
  const todoIndex = AllTODOS.findIndex((todo) => todo.id === todoId);
  if (todoIndex < 0) {
    throw new Error('not found');
  }
  AllTODOS[todoIndex] = { id: todoId, text: updatedText };
  res.send(200).send({ message: 'updated', updatedTod: AllTODOS[todoIndex] });
};
export const getAllTodo: RequestHandler = (req, res, next) => {
  res.status(200).json(AllTODOS);
};
export const getTodoById: RequestHandler = (req, res, next) => {};
