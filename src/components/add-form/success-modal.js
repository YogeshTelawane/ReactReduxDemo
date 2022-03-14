import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import './success-modal.css'

const SuccessModal = ({modalOpen, setModalOpen}) => {
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    }

    return <Modal isOpen={modalOpen} style={customStyles}>
        <div className='modal-inner'>
            <label>Expense Added Successfully!!</label>
            <br/>
            <br/>
            <Link to='/'>
            <div className='form-add-button'>
                <div>
                    <label>Home</label>
                    <i class='fi-rr-paper-plane'></i>
                </div>
            </div>
            </Link>
        </div>
    </Modal>
};

export default SuccessModal