import React from 'react';
import { compose, mapProps, withHandlers } from 'recompose';
import Input from './Input';
import SubmitButton from './SubmitButton';
import { ADD_TODO } from './reducer';

const enhance = compose(
  mapProps(props => props),
  withHandlers({
    onSubmit: props => event => {
      event.preventDefault();
      props.dispatch({
        type: ADD_TODO,
        payload: { todo: event.target.input.value.trim() }
      });
      event.target.input.value = '';
    }
  })
);

export default enhance(({ onSubmit }) => (
  <form onSubmit={onSubmit}>
    <Input />
    <SubmitButton>Submit</SubmitButton>
  </form>
));
