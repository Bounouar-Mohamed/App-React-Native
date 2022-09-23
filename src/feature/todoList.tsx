import { createSlice } from "@reduxjs/toolkit"



interface Typereducer {

    id: string
    text: string
    completed: boolean

};


const todoSlices = createSlice({

    name: "todos",
    initialState: {
        todoList: [
            { id: 1, content: "test todo" },
        ]
    },
    reducers: {
        addToDo: (state, {payload}) => {
            let newTodoList = {
                id: Math.random(),
                content: payload
            }
            state.todoList.push(newTodoList);
        },

        // toggleTodo(state, actions) {
        //     const todo = state.find(todo => todo.id === actions.payload)
        //     if (todo) {
        //         todo.completed = !todo.completed
        //     }

        // }
    }
})

export const { addToDo } = todoSlices.actions

export default todoSlices.reducer;