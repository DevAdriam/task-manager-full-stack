
import { CssBaseline } from "@mui/material";
import {ThemeProvider, createTheme} from '@mui/material/styles'

import App from "./App";
import { createContext, useMemo, useState } from "react";

import {store} from './app/store'
import { Provider } from "react-redux";

export const ThemeContext = createContext(); //start context

export default function ThemeApp() {
    const [mode, setMode] = useState("dark");
    const theme = useMemo(() => {
        return createTheme({
                palette: {mode}  //{mode = 'dark'}
            })
    }, [mode])

    return (
        //step 2
        <Provider store={store}>
            <ThemeContext.Provider value={{mode, setMode}}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <App />
                </ThemeProvider>
            </ThemeContext.Provider>
        </Provider>
    )
}