import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchExpense } from '../../redux/actions/expenses'
import './topFold.css'

const TopFold = () => {

    const [query, setQuery] = useState('')
    const dispatch = useDispatch();
    const handleExpense = (e)=>{
    setQuery(e.target.value);
    dispatch(searchExpense(e.target.value))
    }

    return (
        <div className='topFold'>
            {window.location.pathname === '/' ?
                (<div className='home-topfold'>
                    <div className='searchbar'>
                        <i class="fi fi-rs-search"></i>
                        <input value={query} placeholder='Enter your Xpense' type='text' onChange={e=>handleExpense(e)} />
                    </div>
                    <Link to='/add-expense'>
                    <div className='add-button'>
                        <i class='fi-rr-add'></i>
                        <label>Add</label>
                    </div>
                    </Link>
                </div>) : (
                    <div className='add-topfold'>

                        <Link to='/'>
                        <div className='add-topfold-button'>
                        <i class='fi-rr-angle-left'></i>
                        <label>Back</label>
                        </div>
                        </Link>

                        <Link to='/'>
                        <div className='add-topfold-button'>
                        <i class='fi-rr-cross-circle'></i>
                        <label>Cancel</label>
                        </div>
                        </Link>
                        
                        </div>
                )}

        </div>
    )
}

export default TopFold