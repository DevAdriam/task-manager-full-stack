import Item from "./Item";
import { List } from "@mui/material";
import {useSelector, useDispatch} from 'react-redux'


export default function Task({ deleteTask, toggleDone }) {

  const tasks = useSelector(state => state.todo.tasks);

  return (
    <div>
      <List>
        {tasks
          .filter((task) => !task.done)
          .map((task) => {
            return (
              <Item
                key={task._id}
                task={task}
              />
            );
          })}
      </List>

      <List>
        {tasks
          .filter((task) => task.done)
          .map((task) => {
            return (
              <Item
                key={task._id}
                task={task}
              />
            );
          })}
      </List>
    </div>
  );
}
