import React from 'react';
import { withReducer } from 'recompose';
import { render } from 'react-dom';
import Todos from './Todos';
import Form from './Form';
import todoReducer from './reducer';

const enhance = withReducer('todos', 'dispatch', todoReducer, {});

const App = enhance(({ todos, dispatch }) => {
  return (
    <div>
      <ul>
        <Todos todos={todos} dispatch={dispatch} />
      </ul>
      <Form dispatch={dispatch} />
    </div>
  );
});

document.addEventListener('DOMContentLoaded', () => {
  render(<App />, document.getElementById('app'));
});
