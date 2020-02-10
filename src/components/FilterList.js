import React from "react";
import "./FilterList.css";
import FilterItem from "./FilterItem";
import { VisibilityFilters } from "../constants";

export default function FilterList(props) {
  const filterData = [
    { value: VisibilityFilters.SHOW_ALL, text: "Все" },
    { value: VisibilityFilters.SHOW_DONE, text: "Незавершенные" },
    { value: VisibilityFilters.SHOW_UNDONE, text: "Завершенные" }
  ];

  const filters = filterData.map(item => {
    const isActive = props.filter === item.value;

    return (
      <FilterItem
        key={item.value}
        value={item.value}
        text={item.text}
        isActive={isActive}
      />
    );
  });

  return <div className="filter-list">{filters}</div>;
}
