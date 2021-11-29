import React from "react";
import ExpenseItems from "./ExpenseItems";
import './ExpenseList.css';
const ExpenseList = (props) => {

  if (props.data.length === 0) {
    return <h2 className="expenses-list__fallback">Expenses Not Found !</h2>
  }

  return <ul className="expenses-list">
      {props.data.map((expense) => (
      <ExpenseItems
        key={expense.id}
        title={expense.title}
        date={expense.date}
        amount={expense.amount}
      />
    ))}
  </ul>
};

export default ExpenseList;
