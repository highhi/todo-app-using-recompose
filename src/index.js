import React from 'react';
import { withState, withReducer } from 'recompose';
import { render } from 'react-dom';

const ADD_TODO = 'ADD_TODO';

function submitForm(event, dispatch) {
  event.preventDefault();
  dispatch({
    type: ADD_TODO,
    payload: { todo: event.target.input.value.trim() },
  });
}

const todoReducer = (todos, action) => {
  switch (action.type) {
  case ADD_TODO:
    return todos.concat(action.payload.todo);
  default:
    return todos
  }
}

const Todo = ({ todo, dispatch }) => {
  return <li>{todo}</li>
}

const Todos = ({ todos, dispatch }) => {
  return todos.map(todo => <Todo todo={todo} dispatch={dispatch} />);
}

const SubmitButton = ({ children }) => {
  return <button type="submit">{children}</button>;
};

const Input = () => {
  return <input type="text" name="input" />;
};

const Form = ({ dispatch }) => {
  return <form onSubmit={event => submitForm(event, dispatch)}>
    <Input />
    <SubmitButton>Submit</SubmitButton>
  </form>;
};

const enhance = withReducer('todos', 'dispatch', todoReducer, []);

const App = enhance(({ todos, dispatch }) => {
  return <div>
    <ul>
      <Todos todos={todos} dispatch={dispatch} />
    </ul>
    <Form dispatch={dispatch} />
  </div>;
});

document.addEventListener('DOMContentLoaded', () => {
  render(
    <App />,
    document.getElementById('app'),
  );
});