import { ListItem, ListItemIcon, ListItemText, IconButton } from "@mui/material"
import {Delete as DeleteIcon, CheckBoxOutlineBlank as TodoIcon, Check as CheckIcon} from '@mui/icons-material'

import { useDispatch } from "react-redux";
import {deleteTask, toggleDone} from './features/todo/todoSlice'


export default function Item({task}) { // if use (props), get data like this => props.task.subject
  const dispatch = useDispatch();


    return (
        <ListItem>
            {/* done or undone icon */}
            <ListItemIcon>
                <IconButton onClick={() => dispatch(toggleDone(task._id))}>
                    {task.done ? <CheckIcon color='success' /> : <TodoIcon />}
                </IconButton>
            </ListItemIcon>

            {/* task text */}
            <ListItemText primary={task.subject} />

            {/* delete icon */}
            <ListItemIcon>
                <IconButton onClick={() => dispatch(deleteTask(task._id))}>
                    <DeleteIcon color="error" />
                </IconButton>
            </ListItemIcon>
        </ListItem>
    )
}