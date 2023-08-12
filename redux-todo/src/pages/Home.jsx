import { useEffect } from "react";
import Task from "../Components/Todo/Task";
import Form from "./Form";
import { Container } from "@mui/material";
import { Box } from "@mui/material";

export default function Home() {
    return (
        <>
            <Container>
                <Box sx={{ mx: { lg: 20, md: 5 } }}>
                    <Form />
                    <Task />
                </Box>
            </Container>
        </>
    );
}
