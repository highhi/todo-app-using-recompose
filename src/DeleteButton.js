import React from 'react';
import { compose, mapProps, withHandlers } from 'recompose';
import { REMOVE_TODO } from './reducer';

const enhance = compose(
  mapProps(props => props),
  withHandlers({
    onClick: props => event => {
      props.dispatch({
        type: REMOVE_TODO,
        payload: { id: props.id }
      });
    }
  })
);

export default enhance(({ children, onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
});
