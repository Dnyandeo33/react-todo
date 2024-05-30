import { useState } from 'react';
import Form from './Form';
import ToDos from './ToDos';
import './main.css';

const Main = () => {
  const [toDos, setToDos] = useState([]);

  // add todo
  const addTodo = (todoData) => {
    setToDos((prev) => [todoData, ...prev]);
  };

  // delete todo
  const deleteTodo = (id) => {
    setToDos((prev) => prev.filter((todo) => todo.id != id));
  };

  // edit todo form
  const editTodo = (id) => {
    setToDos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isEditing: !todo.isEditing };
        }
        return todo;
      })
    );
  };

  // update todo
  const updateTodo = (text, id) => {
    setToDos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, text, isEditing: !todo.isEditing };
        }
        return todo;
      })
    );
  };

  // check todo
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
      <ToDos
        toDos={toDos}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
        checkedTodo={checkedTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
};

Main.propTypes = {};

export default Main;
