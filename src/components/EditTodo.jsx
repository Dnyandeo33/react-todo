import PropTypes from 'prop-types';
import { useState } from 'react';

import './editTodo.css';

const EditTodo = ({ todo, updateTodo }) => {
  const [input, setInput] = useState(todo.text);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setError(false);
    setInput(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (!input) {
      setError(true);
      return;
    }

    updateTodo(input, todo.id);
    setInput('');
  };

  return (
    <div>
      <form className="form" onSubmit={(e) => handleClick(e)}>
        <input
          className="edit-input"
          type="text"
          value={input}
          onChange={(e) => handleChange(e)}
        />
        <button className="edit-btn" type="submit">
          Edit
        </button>
      </form>
      {error && <p style={{ color: 'red' }}>Please enter something...</p>}
    </div>
  );
};

EditTodo.propTypes = {
  todo: PropTypes.object.isRequired,
  updateTodo: PropTypes.func.isRequired,
};

export default EditTodo;
