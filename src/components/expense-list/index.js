import React from 'react'
import Card from './Card';
import './expenseList.css'
import { useSelector } from 'react-redux';

const ExpenseList = () => {
    const { expenseList: list, query } = useSelector((state) => state.expenses);
    const filteredList = list.filter(item=> item.title.includes(query));
    return <div className='expense-list'>
        {filteredList.length ? (filteredList.map(item => 
            <Card item={item} />)
            ) : (<div className='empty-state'>
            <h3>Your expense list is empty</h3>
        </div>)}
    </div>
};

export default ExpenseList