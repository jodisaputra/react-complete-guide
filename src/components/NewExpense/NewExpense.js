import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataFromForm = (newValue) => {
    const expenseData = {
      ...newValue,
      id: Math.random().toString()
    };
    // ini dipanggil dari App.js parameter
    // data dikirim ke App.js
    props.onAddNewExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm callExpenseFormValue={saveExpenseDataFromForm} />
    </div>
  );
};

export default NewExpense;
