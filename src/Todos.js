import React from 'react';
import Todo from './Todo';

export default ({ todos, dispatch }) => {
  return Object.keys(todos).map(key => {
    return <Todo key={key} id={key} todo={todos[key]} dispatch={dispatch} />;
  });
};
