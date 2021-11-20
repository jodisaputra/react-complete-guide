import React, {useState} from "react";
import ExpenseItems from "./ExpenseItems";
import "./Expense.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

const Expense = (props) => {
  const [filterChanged, setFilterChanged] = useState('2020');
  const filterChangedHandler = selectedYear => {
    setFilterChanged(selectedYear);
  }
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={filterChanged} filter={filterChangedHandler} />
        <ExpenseItems
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
        />
      </Card>
    </div>
  );
};

export default Expense;
