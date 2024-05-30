import PropTypes from 'prop-types';

import './todo.css';

const Todo = ({ todo, deleteTodo, checkedTodo }) => {
  return (
    <li className="todo-list">
      <div className={todo.completed ? 'bg' : 'todo'}>
        <h4 className={todo.completed ? 'done' : 'not-done'}>{todo.text}</h4>
        <div className="btn-container">
          <button onClick={() => checkedTodo(todo.id)}>
            {todo.completed ? 'Checked' : 'Check'}
          </button>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
      </div>
    </li>
  );
};
Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string,
    text: PropTypes.string,
    completed: PropTypes.bool,
  }),

  deleteTodo: PropTypes.func,
  checkedTodo: PropTypes.func,
};

export default Todo;
