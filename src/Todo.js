import React from 'react';
import DeleteButton from './DeleteButton';

export default ({ id, todo, dispatch }) => {
  return (
    <li>
      {todo}
      <DeleteButton id={id} dispatch={dispatch}>
        Delete
      </DeleteButton>
    </li>
  );
};
