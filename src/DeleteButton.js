import React from 'react';
import { REMOVE_TODO } from './reducer';

function deleteTodo(id, dispatch) {
  dispatch({
    type: REMOVE_TODO,
    payload: { id }
  });
}

export default ({ children, id, dispatch }) => {
  return (
    <button type="button" onClick={() => deleteTodo(id, dispatch)}>
      {children}
    </button>
  );
};
