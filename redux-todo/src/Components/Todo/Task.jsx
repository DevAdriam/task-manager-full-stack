import Item from "./Item";
import { Box, List } from "@mui/material";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../Loading/loading";
import { fetchTasks } from "../../hooks/useFetchTodo";

export default function Task() {
    const { tasks, isLoading, error } = useSelector((state) => state.todo);
    const dispatch = useDispatch();

    console.log(isLoading);

    useEffect(() => {
        fetchTasks(dispatch);
    }, [dispatch]);

    if (isLoading) {
        return <Loading />;
    }

    if (error) {
        return <h2>{error}</h2>;
    }

    return (
        <Box sx={{ mt: 5 }}>
            <List>
                {tasks
                    .filter((task) => !task.done)
                    .map((task) => {
                        return <Item key={task._id} task={task} />;
                    })}
            </List>

            <List>
                {tasks
                    .filter((task) => task.done)
                    .map((task) => {
                        return <Item key={task._id} task={task} />;
                    })}
            </List>
        </Box>
    );
}
