import { toggleDone } from "../../features/todo/todoSlice";

const url = import.meta.env.VITE_BACKEND_URL;

export const toggleTask = async (dispatch, _id) => {
    const res = await fetch(`${url}/${_id}/toggle`, {
        method: "put",
    });

    if (res.ok) {
        dispatch(toggleDone(_id));
    }
};
