import React, { useState } from 'react'
import './addForm.css'
import { categories } from '../../constants/add-expense'
import { useDispatch } from 'react-redux'
import { appExpense } from '../../redux/actions/expenses'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SuccessModal from './success-modal'


const AddForm = () => {
    const cat = categories;
    const [categoryOpen, setCategoryOpen] = useState(false)
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [category, setcategory] = useState()
    const[modalOpen, setModalOpen]= useState(false)
    const dispatch = useDispatch()

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleAmount = (e) => {
        const val = parseFloat(e.target.value)
        if (isNaN(val)) {
            setAmount("");
            return;
        }
        setAmount(val)
    }

    const handleCategory = category => {
        setcategory(category);
        setCategoryOpen(false)
    }

    const handleSubmit = () => {
        if (title === '' || amount === '' || !category) {
            const notify = () => toast("No data filled!");
            notify()
            return
        }

        const data = {
            title,
            amount,
            category,
            createdAt: new Date()
        }

        dispatch(appExpense(data))
        setModalOpen(true);
    }
    return (
        <div className='add-form'>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
            />
            <SuccessModal modalOpen={modalOpen} setModalOpen={setModalOpen}/>
            <div className='form-item'>
                <label>Title</label>
                <input placeholder='Enter your expenditure' value={title} onChange={(e) => handleTitle(e)} />
            </div>
            <div className='form-item'>
                <label>Amount</label>
                <input className='amount-input' placeholder='Enter your amount' value={amount} onChange={(e) => handleAmount(e)} />
            </div>
            <div className='category-container-parent'>
                <div className='category'>
                    <div className='category-dropdown' onClick={() => setCategoryOpen(!categoryOpen)}>
                        <label>{category ? category.title : "Category"}</label>
                        <i class="fi-rr-angle-down"></i>
                    </div>
                    {categoryOpen && <div className='category-container'>
                        {cat.map(category => (
                            <div className='category-item' style={{ borderRight: `5px solid ${category.color}` }} key={category.id} onClick={() => handleCategory(category)}>
                                <label>{category.title}</label>
                            </div>
                        ))}
                    </div>}
                </div>
            </div>
            <div className='form-add-button'>
                <div onClick={handleSubmit}>
                    <label>Add</label>
                    <i class='fi-rr-paper-plane'></i>
                </div>
            </div>
        </div>
    )
}

export default AddForm