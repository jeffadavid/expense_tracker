import React, {useState} from 'react';
import '../../css/NewExpense/ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredamount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('') 

    //Another way of combining state
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // });
    
    const titleChangeHandler = (event) => {        
        setEnteredTitle(event.target.value);

        //Other ways of changing state

        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // })

        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value };
        // });
    };

    const amountChangeListener = (event) => {
        setEnteredAmount(event.target.value);        
    };

    const dateChangeListener = (event) =>{
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredamount,
            date: new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData);

        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
    };

  return (
    <form onSubmit={submitHandler} >
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input 
                    type='text' 
                    value={enteredTitle}
                    onChange={titleChangeHandler} 
                />
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input 
                    type='number' 
                    min="0.01" 
                    step="0.01" 
                    value={enteredamount}
                    onChange={amountChangeListener} 
                />
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input 
                    type='date' 
                    min="2019-01-01" 
                    max="2022-12-31" 
                    value={enteredDate}
                    onChange={dateChangeListener} 
                />
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
  )
}

export default ExpenseForm;
