import React from 'react'
import AddTodo from './AddTodo/AddTodo'
import ShowTodo from './ShowTodo/ShowTodo'

export default function TodoList() {
    return (
        <div className="container d-flex flex-column align-items-center">
            <AddTodo />
            <ShowTodo />
        </div>
    )
}
