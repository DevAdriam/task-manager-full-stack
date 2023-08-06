import {Box, Typography, Avatar} from '@mui/material'
import {Container} from '@mui/material'

export default function About() {
    return(
        <Container>
            <Box sx={{mx: {lg: 20, md: 10}}}>
                <Typography variant='h1'>About Us</Typography>
                <Typography variant='p'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam odit ratione dolore temporibus laudantium, inventore neque expedita. Cum, voluptas atque.
                </Typography>
                <Box sx={{display: 'flex', mt: 3, gap: 1}}>
                    <Avatar>A</Avatar>
                    <Avatar>B</Avatar>
                </Box>
            </Box>
        </Container>
    )
}