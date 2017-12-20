import React from 'react';
import Input from './Input';
import SubmitButton from './SubmitButton';
import { ADD_TODO } from './reducer';

function submitForm(event, dispatch) {
  event.preventDefault();
  dispatch({
    type: ADD_TODO,
    payload: { todo: event.target.input.value.trim() }
  });
  event.target.input.value = '';
}

export default ({ dispatch }) => {
  return (
    <form onSubmit={event => submitForm(event, dispatch)}>
      <Input />
      <SubmitButton>Submit</SubmitButton>
    </form>
  );
};
