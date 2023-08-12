import Header from "./pages/Header";
import MainDrawer from "./pages/MainDrawer";
import { Outlet } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";

export default function App() {
    const tasks = useSelector((state) => state.todo.tasks);
    const count = tasks.filter((task) => !task.done).length;

    return (
        <>
            <ToastContainer autoClose={700} hideProgressBar={true} />
            <Header count={count} />
            <MainDrawer />
            <Outlet />
        </>
    );
}
