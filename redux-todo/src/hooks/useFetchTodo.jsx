import { setError, setLoading, setTodo } from "../features/todo/todoSlice";

async function fetchTasks(dispatch) {
    dispatch(setLoading());
    try {
        const data = await fetch("http://localhost:8888/tasks")
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                setError("Failed to load data");
            })
            .catch((err) => {
                // works only when server have literally no response
                setError("Error");
            });
        dispatch(setTodo(data));
    } catch (err) {
        dispatch(setError("Error"));
    }
}

export { fetchTasks };
