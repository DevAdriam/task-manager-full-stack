import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    tasks: [
        { _id: 1, subject: "Milk", done: false },
        { _id: 2, subject: "Butter", done: true },
        { _id: 3, subject: "Cake", done: false },
        { _id: 4, subject: "Egg", done: true },
    ],

    showDrawer: false
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTask: (state, action) => {
            const _id = state.tasks[state.tasks.length - 1]._id + 1;
            state.tasks = [...state.tasks, { _id, subject: action.payload, done: false }]
        },

        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task._id !== action.payload)
        },

        toggleDone: (state, action) => {
            state.tasks = state.tasks.map(task => {
                if (task._id === action.payload) task.done = !task.done;
                return task;
            })
        },

        clear: (state, action) => {
            state.tasks = state.tasks.filter(task => !task.done);
        },

        toggleDrawer: (state, action) => {

            state.showDrawer = !state.showDrawer
        }

    }
})

export const { addTask, deleteTask, toggleDone, clear, toggleDrawer } = todoSlice.actions;
export default todoSlice.reducer