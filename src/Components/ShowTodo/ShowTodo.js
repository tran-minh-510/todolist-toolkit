import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getListTodos } from './sliceShowTodo'
import { actionReducer } from './sliceShowTodo';

export default function ShowTodo() {
    const [IdJobEdit, setIdJobEdit] = useState(-1)
    const [valueInputEdit, setValueInputEdit] = useState('')
    const listJobs = useSelector(getListTodos)
    const dispatch = useDispatch()
    const handleCheckedValue = (id, isChecked) => {
        dispatch(actionReducer.handleStatusChecked({ id, isChecked }))
    }
    const handleJobEdit = (id, content) => {
        if (IdJobEdit !== id) {
            setIdJobEdit(id)
            setValueInputEdit(content)
        } else {
            setIdJobEdit(-1)
            dispatch(actionReducer.eidtJob({ id, content: valueInputEdit }))
        }
    }
    const callDeleteJob = (id) => {
        dispatch(actionReducer.removeJob(id))
    }
    return (
        <div className="mt-5">
            <h3>Danh sách công việc:</h3>
            <ul className="list-group">
                {listJobs.map(({ id, content, isChecked }) => {
                    return (
                        <li className="list-group-item d-flex align-items-center" key={id}>
                            {IdJobEdit === id ? (
                                <input
                                    type="text"
                                    className="form-control me-2"
                                    placeholder="Nhập công việc..."
                                    value={valueInputEdit}
                                    onChange={(e) => setValueInputEdit(e.target.value)}
                                />
                            ) : (
                                <>
                                    <input
                                        class="form-check-input mt-0"
                                        type="checkbox"
                                        checked={isChecked}
                                        onChange={() => handleCheckedValue(id, isChecked)}
                                    ></input>
                                    <span
                                        class={`px-3 ${isChecked && "text-decoration-line-through"
                                            }`}
                                    >
                                        {content}
                                    </span>
                                </>
                            )}
                            <div class="d-flex">
                                <button
                                    type="button"
                                    class="btn btn-primary mx-1"
                                    disabled={isChecked}
                                    onClick={() => handleJobEdit(id, content)}
                                >
                                    {IdJobEdit === id ? "Lưu" : "Sửa"}
                                </button>
                                <button
                                    type="button"
                                    class="btn btn-danger mx-1"
                                    onClick={() => callDeleteJob(id)}
                                >
                                    Xóa
                                </button>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}
