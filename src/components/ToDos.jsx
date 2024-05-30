import PropTypes from 'prop-types';
import EditTodo from './EditTodo';
import Todo from './Todo';
import './todos.css';

const ToDos = ({ toDos, checkedTodo, updateTodo, editTodo, deleteTodo }) => {
  return (
    <ul className="todo-list">
      {toDos.map((todo) =>
        todo.isEditing ? (
          <EditTodo key={todo.id} todo={todo} updateTodo={updateTodo} />
        ) : (
          <Todo
            key={todo.id}
            todo={todo}
            checkedTodo={checkedTodo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </ul>
  );
};

ToDos.propTypes = {
  toDos: PropTypes.array.isRequired,
  checkedTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
};

export default ToDos;
