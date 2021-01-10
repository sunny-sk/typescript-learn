import React, { useState } from 'react';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';
import { Todo } from './model/todo.model';
const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const todoAddHandler = (text: string) => {
    setTodos((prevTodo) => [
      ...prevTodo,
      { id: Math.random().toString(), text: text },
    ]);
  };
  const todoDeleteHandler = (id: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((e) => e.id !== id);
    });
  };

  return (
    <div className='App'>
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  );
};

export default App;
