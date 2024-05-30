import PropTypes from 'prop-types';
import Todo from './Todo';
import './todos.css';

const ToDos = ({ toDos, checkedTodo, deleteTodo }) => {
  return (
    <ul className="todo-list">
      {toDos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          checkedTodo={checkedTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
};

ToDos.propTypes = {
  toDos: PropTypes.array.isRequired,
  checkedTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default ToDos;
