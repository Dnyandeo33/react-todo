import PropTypes from 'prop-types';
import { useState } from 'react';
import uuid from 'react-uuid';

import './form.css';

const Form = ({ addTodo }) => {
  const [input, setInput] = useState('');
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

    const todo = {
      id: uuid(),
      text: input,
      completed: false,
    };

    addTodo(todo);
    setInput('');
  };

  return (
    <div>
      <form className="form" onSubmit={(e) => handleClick(e)}>
        <input
          className="input"
          type="text"
          value={input}
          onChange={(e) => handleChange(e)}
        />
        <button className="btn" type="submit">
          add
        </button>
      </form>
      {error && <p style={{ color: 'red' }}>Please enter something...</p>}
    </div>
  );
};

Form.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default Form;
