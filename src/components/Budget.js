import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const handleBudgetChange = (event) => {

        if (event.target.value>20000){
            alert("The value of budget cannot exceed 20,000");
        }

        if (event.target.value < totalExpenses){
            alert("You cannot reduce the budget value lower than the spending");
        }

        if (event.target.value<=20000 && event.target.value >= totalExpenses){
            setNewBudget(event.target.value);
        }

    }
    return (
<div className='alert alert-secondary'>
<span>Budget: £{budget}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;

