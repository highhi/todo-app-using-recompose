export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

let id = 0;

function omit(obj, ...keys) {
  return Object.keys(obj).reduce((acc, key) => {
    if (keys.indexOf(key) === -1) {
      acc[key] = obj[key];
    }

    return acc;
  }, {});
}

export default (todos, action) => {
  switch (action.type) {
    case ADD_TODO:
      return Object.assign({}, todos, {
        [id++]: action.payload.todo
      });
    case REMOVE_TODO:
      return omit(todos, action.payload.id);
    default:
      return todos;
  }
};
