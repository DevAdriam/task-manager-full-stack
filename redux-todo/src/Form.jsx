import { useRef } from "react";

import { FormControl, OutlinedInput, InputAdornment, IconButton } from "@mui/material";
import {Add as AddIcon} from '@mui/icons-material'

import { useDispatch } from "react-redux";
import {addTask} from './features/todo/todoSlice'

export default function Form() {
    const input = useRef();
    const dispatch = useDispatch();
    return(
        <form action="" onSubmit={e => {
            e.preventDefault();
            const subject = input.current.value;
            dispatch(addTask(subject))
            input.current.value= '';
            input.current.focus();
        }}>
            <FormControl fullWidth>
                <OutlinedInput 
                    inputRef={input}
                    color="secondary"
                    endAdornment={<InputAdornment position="end">
                                <IconButton type="submit">
                                    <AddIcon />
                                </IconButton>
                            </InputAdornment>}
                >

                </OutlinedInput>
            </FormControl>
        </form>
    )
}