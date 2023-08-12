import { toast } from "react-toastify";
import { addTask } from "../../features/todo/todoSlice";
const url = import.meta.env.VITE_BACKEND_URL;

console.log(url);
export const addNewTodo = async (subject, dispatch) => {
    console.log(url);

    console.warn(subject);
    const res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ subject }),
    });

    if (res.ok) {
        console.warn(subject);
        const data = await res.json();
        console.log(data);

        dispatch(addTask(data));
        toast.success("successfully added!");
    }
};
