import * as React from "react";
import { AppBar, Box, Toolbar, Typography, Badge, IconButton, Menu, MenuItem } from "@mui/material";
import { Menu as MenuIcon,
        LightMode as LightModeIcon,
        DarkMode as DarkModeIcon  ,
        MoreVert as MoreVertIcon
} from "@mui/icons-material";

import { useContext } from "react";
import { ThemeContext } from "./ThemeApp";

import { useDispatch } from "react-redux";
import { clear, toggleDrawer } from './features/todo/todoSlice'

export default function Header({count}) {
  const {mode, setMode} = useContext(ThemeContext)
  const [showMenu, setShowMenu] = React.useState(false);
  const dispatch = useDispatch();

  return (
    <Box sx={{ flexGrow: 1, mb: 3 }}>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{flexGrow: 1}}>
            <IconButton onClick={() => dispatch(toggleDrawer())}>
              <MenuIcon></MenuIcon>
            </IconButton>

            <Badge badgeContent={count} color="error" sx={{mr:2}}>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Todo
              </Typography>
            </Badge>
          </Box>
            
          {
            mode === 'dark' ? (
              <IconButton onClick={() => setMode("light")}>
                <LightModeIcon></LightModeIcon>
              </IconButton>
            ): (
              <IconButton onClick={() => setMode('dark')}>
                <DarkModeIcon></DarkModeIcon>
              </IconButton>
            )}

            <IconButton onClick={e => setShowMenu(e.currentTarget)}>
              <MoreVertIcon></MoreVertIcon>
            </IconButton>

            <Menu 
              anchorEl={showMenu}
              open={Boolean(showMenu)}
              onClose={() => setShowMenu(false)}
            >
              <MenuItem 
                onClick={()=> {
                  setShowMenu(false)
                  dispatch(clear())
                }}
                sx={{width:200}}
              >
                Clear
              </MenuItem>
            </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
