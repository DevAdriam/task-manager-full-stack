import { clear } from "../../features/todo/todoSlice";
const url = import.meta.env.BACKEND_URL;
console.log(url);
export const clearTask = async (dispatch) => {
    const res = await fetch(url, { method: "DELETE" });

    if (res.ok) {
        dispatch(clear());
    }
};
