import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "./Card";

function Expenses({ expenses }) {
  const expenseItems = expenses.map((expense) => {
    return (
      <Card className="expenses">
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        />
      </Card>
    );
  });

  return expenseItems;
}

export default Expenses;
