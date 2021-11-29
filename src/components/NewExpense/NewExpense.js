import React, {useState} from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataFromForm = (newValue) => {
    const expenseData = {
      ...newValue,
      id: Math.random().toString()
    };
    // ini dipanggil dari App.js parameter
    // data dikirim ke App.js
    props.onAddNewExpense(expenseData);
    // jika sudah selesai input, set iseditng false
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  }

  const stopEditingHandler = () => {
    setIsEditing(false);
  }

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm callExpenseFormValue={saveExpenseDataFromForm} onCancel={stopEditingHandler} />}
    </div>
  );
};

export default NewExpense;
