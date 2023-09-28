import ExpenseItem from "./ExpenseItem";

function Expenses({ expenses }) {
  const expenseItems = expenses.map((expense) => {
    return (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        date={expense.date}
        amount={expense.amount}
      />
    );
  });

  return expenseItems;
}

export default Expenses;
