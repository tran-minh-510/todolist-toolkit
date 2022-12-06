import React from 'react'
import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import uniqid from 'uniqid';
import { actionReducer } from '../ShowTodo/sliceShowTodo';

export default function AddTodo() {
    const refInput = useRef()
    const dispatch = useDispatch()
    const [valueInput, setValueInput] = useState('')
    const handleForm = (e) => {
        e.preventDefault();
        if (valueInput !== '') {
            const jobNew = {
                id: uniqid(),
                content: valueInput,
                isChecked: false
            }
            dispatch(actionReducer.addTodo(jobNew))
            refInput.current.focus();
            setValueInput("");
        } else {
            alert('Bạn chưa nhập công việc !')
        }
    };
    return (
        <div className="w-50">
            <h2>TodoList</h2>
            <form onSubmit={handleForm}>
                <div className="d-flex">
                    <input
                        type="text"
                        className="form-control mx-3"
                        value={valueInput}
                        onChange={(e) => setValueInput(e.target.value)}
                        ref={refInput}
                    />
                    <button type="submit" className="btn btn-primary">
                        Thêm
                    </button>
                </div>
            </form>
        </div>
    )
}
