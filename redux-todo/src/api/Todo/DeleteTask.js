import { toast } from "react-toastify";
import { deleteTask } from "../../features/todo/todoSlice";

export const deleteTodo = async (dispatch, _id) => {
    const res = await fetch(`http://localhost:8888/tasks/${_id}`, {
        method: "DELETE",
    });

    if (res.ok) {
        dispatch(deleteTask(_id));
        toast.error("task deleted!");
    }
};
