import Task from "./Task";
import Form from "./Form";
import Header from './Header';
import MainDrawer from './MainDrawer';
import { Container } from "@mui/material";
import { Box } from "@mui/material";

import { useSelector } from 'react-redux';

export default function App() {
  const tasks = useSelector(state => state.todo.tasks)

  const count = (tasks.filter(task => !task.done)).length;

  return (
    <>
      <Header count={count} />

      <MainDrawer/>

      <Container>
        <Box sx={{mx: {lg:20, md: 10}}}>
          <Form />
          <Task  />
        </Box>
      </Container>
      
    </>
  );
}
