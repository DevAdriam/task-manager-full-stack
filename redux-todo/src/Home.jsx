import Task from "./Task";
import Form from "./Form";
import { Container } from "@mui/material";
import { Box } from "@mui/material";

import { useSelector } from 'react-redux';

export default function App() {
  const tasks = useSelector(state => state.todo.tasks)


  return (
    <>
      <Container>
        <Box sx={{mx: {lg:20, md: 10}}}>
          <Form />
          <Task  />
        </Box>
      </Container>
    </>
  );
}
