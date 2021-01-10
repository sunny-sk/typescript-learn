import React, { useRef } from 'react';
import './NewTodo.css';
type NewTodoProps = {
  onAddTodo: (todoText: string) => void;
};

const NewTodo: React.FC<NewTodoProps> = ({ onAddTodo }) => {
  const textInput = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredText = textInput.current!.value;
    onAddTodo(enteredText);
  };
  return (
    <form onSubmit={todoSubmitHandler}>
      <div>
        <label htmlFor='todo-text'>Todo Text</label>
        <input ref={textInput} type='text' placeholder='enter todo' />
      </div>
      <button type='submit'>ADD TODO</button>
    </form>
  );
};

export default NewTodo;
