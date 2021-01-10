"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todos_1 = require("../controllers/todos");
const route = express_1.Router();
route.get('/', todos_1.getAllTodo);
route.post('/', todos_1.createTodo);
route.get('/:id', todos_1.getTodoById);
route.put('/:id', todos_1.updateTodo);
route.delete('/:id', todos_1.deleteTodo);
exports.default = route;
