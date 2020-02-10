import React, { useReducer } from "react";
import "./styles.css";
import TodoList from "./components/TodoList";
import FilterList from "./components/FilterList";
import Form from "./components/Form";
import { AppContext } from "./utils/AppContext";

import { VisibilityFilters } from "./constants";
import { reducer, initialState } from "./reducer";

const a = 1;

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={dispatch}>
      <div>
        <FilterList filter={state.visibilityFilter} />
        <TodoList
          todos={getVisibleTodos(state.todos, state.visibilityFilter)}
        />
        <Form dispatch={dispatch} />
      </div>
    </AppContext.Provider>
  );
}

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_DONE:
      return todos.filter(t => !t.completed);
    case VisibilityFilters.SHOW_UNDONE:
      return todos.filter(t => t.completed);
    default:
      throw new Error("Unknow filter: " + filter);
  }
};
