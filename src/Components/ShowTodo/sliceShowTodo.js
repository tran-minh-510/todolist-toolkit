import { createSlice } from "@reduxjs/toolkit";

const initState = [
    {
        id: 1,
        content: '123',
        isChecked: false
    },
    {
        id: 2,
        content: '456',
        isChecked: false
    },
    {
        id: 3,
        content: '789',
        isChecked: false
    }
]

const sliceShowTodo = createSlice({
    name: "showTodo",
    initialState: initState,
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload)
        },
        handleStatusChecked: (state, action) => {
            state.find(({ id }) => id === action.payload.id).isChecked = !action.payload.isChecked
        },
        eidtJob: (state, action) => {
            state.find(({ id }) => id === action.payload.id).content = action.payload.content
        },
        removeJob: (state, action) => {
            // const id = state.findIndex((todo) => todo.id === action.payload);
            // state.splice(id, 1)
            // return state
            state = state.filter((todo) => todo.id !== action.payload);
        }
    }
})

export const actionReducer = sliceShowTodo.actions

export const getListTodos = (state) => state.showTodo

export default sliceShowTodo.reducer