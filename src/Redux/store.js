import { configureStore } from "@reduxjs/toolkit"
import sliceAddTodo from "../Components/AddTodo/sliceAddTodo"
import sliceShowTodo from "../Components/ShowTodo/sliceShowTodo"

const store = configureStore({
    reducer: {
        addTodo: sliceAddTodo,
        showTodo: sliceShowTodo
    }
})

export default store