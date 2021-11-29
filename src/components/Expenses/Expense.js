import React, { useState } from "react";
import ExpenseList from './ExpenseList';
import "./Expense.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseChart from "./ExpenseChart";

const Expense = (props) => {
  const [filterChanged, setFilterChanged] = useState("2020");
  const filterChangedHandler = (selectedYear) => {
    setFilterChanged(selectedYear);
  };
  const filteredExpense = props.data.filter((expense) => {
    return expense.date.getFullYear().toString() === filterChanged;
  });

  
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={filterChanged} filter={filterChangedHandler} />
        {/* array map with filter */}
        <ExpenseChart expenses={filteredExpense} />
        <ExpenseList data={filteredExpense} />
        {/* array map no filter */}
        {/* {props.data.map((expense) => (
          <ExpenseItems
            key={expense.id}
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
          />
        ))} */}
        {/* <ExpenseItems
          title={props.data[0].title}
          date={props.data[0].date}
          amount={props.data[0].amount}
        />
        <ExpenseItems
          title={props.data[1].title}
          date={props.data[1].date}
          amount={props.data[1].amount}
        />
        <ExpenseItems
          title={props.data[2].title}
          date={props.data[2].date}
          amount={props.data[2].amount}
        />
        <ExpenseItems
          title={props.data[3].title}
          date={props.data[3].date}
          amount={props.data[3].amount}
        /> */}
      </Card>
    </div>
  );
};

export default Expense;
