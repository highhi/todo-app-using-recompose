export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

let id = 0;

export default (todos, action) => {
  switch (action.type) {
    case ADD_TODO:
      return Object.assign({}, todos, {
        [id++]: action.payload.todo
      });
    case REMOVE_TODO:
      const newTodos = Object.assign({}, todos);
      delete newTodos[action.payload.id];
      return newTodos;
    default:
      return todos;
  }
};
