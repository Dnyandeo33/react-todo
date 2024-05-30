import { useState } from 'react';
import Form from './Form';
import ToDos from './ToDos';
import './main.css';

const Main = () => {
  const [toDos, setToDos] = useState([]);

  const addTodo = (todoData) => {
    setToDos((prev) => [todoData, ...prev]);
  };
  const deleteTodo = (id) => {
    setToDos((prev) => prev.filter((todo) => todo.id != id));
  };
  const checkedTodo = (id) => {
    setToDos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  return (
    <div className="main">
      <Form addTodo={addTodo} />
      <ToDos toDos={toDos} deleteTodo={deleteTodo} checkedTodo={checkedTodo} />
    </div>
  );
};

Main.propTypes = {};

export default Main;
