"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTodoById = exports.getAllTodo = exports.updateTodo = exports.deleteTodo = exports.createTodo = void 0;
const AllTODOS = [];
const createTodo = (req, res, next) => {
    const text = req.body.text;
    AllTODOS.push({ id: Math.random().toString(), text });
};
exports.createTodo = createTodo;
const deleteTodo = (req, res, next) => {
    const todoId = req.params.id;
    const todoIndex = AllTODOS.findIndex((todo) => todo.id === todoId);
    if (todoIndex < 0) {
        throw new Error('not found');
    }
    AllTODOS.splice(todoIndex, 1);
    res.send(200).send({ message: 'todo deleted' });
};
exports.deleteTodo = deleteTodo;
const updateTodo = (req, res, next) => {
    const todoId = req.params.id;
    const updatedText = req.body.text;
    const todoIndex = AllTODOS.findIndex((todo) => todo.id === todoId);
    if (todoIndex < 0) {
        throw new Error('not found');
    }
    AllTODOS[todoIndex] = { id: todoId, text: updatedText };
    res.send(200).send({ message: 'updated', updatedTod: AllTODOS[todoIndex] });
};
exports.updateTodo = updateTodo;
const getAllTodo = (req, res, next) => {
    res.status(200).json(AllTODOS);
};
exports.getAllTodo = getAllTodo;
const getTodoById = (req, res, next) => { };
exports.getTodoById = getTodoById;
