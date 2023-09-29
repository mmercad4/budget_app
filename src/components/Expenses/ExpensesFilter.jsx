import "./ExpensesFilter.css";
import { useState } from "react";

const ExpensesFilter = (props) => {
  const [filter, setFilter] = useState("All");

  const filterHandler = (event) => {
    setFilter(filter);
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={filterHandler}>
          <option value="All">All</option>
          <option value="2022">2022</option>
          <option value="2019">2020</option>
          <option value="2018">2019</option>
          <option value="2021">2021</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
