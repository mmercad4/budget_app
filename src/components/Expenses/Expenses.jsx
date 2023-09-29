import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";

function Expenses({ expenses }) {
  const [filteredYear, setFilteredYear] = useState("");

  const filterChangedHandler = (filteredYear) => {
    setFilteredYear(filteredYear);
  };

  const expenseItems = expenses.map((expense) => {
    return (
      <div>
        <div className="expenses">
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
          />
        </div>
      </div>
    );
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangedHandler}
      />
      {expenseItems}
    </Card>
  );
}

export default Expenses;
