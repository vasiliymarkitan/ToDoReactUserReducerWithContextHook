import React from "react";
import { SET_VISIBILITY_FILTER } from "../constants";
import { AppContext } from "../utils/AppContext";

export default function FilterItem(props) {
  const { value, text, isActive } = props;

  return (
    <AppContext.Consumer>
      {dispatch => {
        return (
          <div
            className={`filter-list__item ${
              isActive ? "filter-list__item_active" : ""
            }`}
            onClick={() => {
              dispatch({
                type: SET_VISIBILITY_FILTER,
                filter: value
              });
            }}
          >
            {text}
          </div>
        );
      }}
    </AppContext.Consumer>
  );
}
