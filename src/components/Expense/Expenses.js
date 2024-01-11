import React, { useState } from 'react';
import '../../css/Expense/Expenses.css';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';

function Expenses(props) {

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear); 
  };

  const filteredExpense = props.items.filter( expense => {
    return expense.date.getFullYear().toString() === filteredYear
  });

  return (
     <div>
    <Card className='expenses'>
      <ExpensesFilter 
        selected={filteredYear} 
        onChangeFilter={filterChangeHandler} 
      />
      
      {filteredExpense.length === 0 ? (
        <p>No expenses found.</p>
      ) : (
        filteredExpense.map(expense => (
          <ExpenseItem 
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )}      
    </Card>
    </div>
  )
}

export default Expenses;
