import {
  SET_VISIBILITY_FILTER,
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  VisibilityFilters
} from "../constants";
import todosData from "../todosData";

export const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: todosData
};

export function reducer(state, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, {
        visibilityFilter: action.filter
      });
    case ADD_TODO:
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            id: Math.random()
              .toString(16)
              .slice(-6),
            text: action.text,
            completed: false
          }
        ]
      });
    case TOGGLE_TODO:
      return Object.assign({}, state, {
        todos: state.todos.map(todo => {
          if (todo.id === action.id) {
            return Object.assign({}, todo, {
              completed: !todo.completed
            });
          }

          return todo;
        })
      });
    case DELETE_TODO:
      return Object.assign({}, state, {
        todos: state.todos.filter(item => item.id !== action.id)
      });
    default:
      return state;
  }
}
