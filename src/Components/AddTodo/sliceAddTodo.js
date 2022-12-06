import { createSlice } from "@reduxjs/toolkit"

const initState = {}

const sliceAddTodo = createSlice({
    name: "addTodo",
    initialState: initState
})

export default sliceAddTodo.reducer