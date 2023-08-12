import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: [],
    isLoading: false,
    error: null,
    showDrawer: false,
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.isLoading = true;
        },
        setError: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        setTodo: (state, action) => {
            state.isLoading = false;
            state.tasks = action.payload;
        },

        addTask: (state, action) => {
            console.log(action.payload);
            state.tasks = [...state.tasks, action.payload];
        },

        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter(
                (task) => task._id !== action.payload
            );
        },
        toggleDone: (state, action) => {
            state.tasks = state.tasks.map((task) => {
                if (task._id === action.payload) task.done = !task.done;
                return task;
            });
        },
        clear: (state, action) => {
            state.tasks = state.tasks.filter((task) => !task.done);
        },

        toggleDrawer: (state, action) => {
            state.showDrawer = !state.showDrawer;
        },
    },
});

export const {
    addTask,
    deleteTask,
    toggleDone,
    clear,
    toggleDrawer,
    setLoading,
    setError,
    setTodo,
} = todoSlice.actions;
export default todoSlice.reducer;
