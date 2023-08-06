import {Box, Drawer, Avatar, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material'
import {
    Home as HomeIcon,
    AccountCircle as AccountCircleIcon,
    Mail as MailIcon
} from '@mui/icons-material'
import { Link } from 'react-router-dom'

import {useSelector, useDispatch} from 'react-redux'
import { toggleDrawer } from './features/todo/todoSlice'

export default function MainDrawer() {
    const dispatch = useDispatch();
    const showDrawer = useSelector(state => state.todo.showDrawer)
    return (
        <div>
            <Drawer
                anchor='left'
                open={showDrawer}
                onClose={() => dispatch(toggleDrawer())}
            >
                <Box sx={{width: 300}}>
                    <Box sx={{
                        height: 200, 
                        background: 'pink',
                        display: 'flex',
                        alignItems: 'end'
                        }}>

                        <Avatar sx={{
                            width: 75, 
                            height: 75,
                            ml: 3,
                            mb: -5
                            }}></Avatar>
                    </Box>

                    <List sx={{mt: 10}}>
                        <ListItem>
                            <Link to="/">
                                <ListItemButton>
                                    <ListItemIcon>
                                        <HomeIcon />
                                    </ListItemIcon>
                                    <ListItemText secondary="Home" />
                                </ListItemButton>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link to="/about">
                                <ListItemButton>
                                    <ListItemIcon>
                                        <AccountCircleIcon />
                                    </ListItemIcon>
                                    <ListItemText secondary="About" />
                                </ListItemButton>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link to="/contact">
                                <ListItemButton>
                                    <ListItemIcon>
                                        <MailIcon />
                                    </ListItemIcon>
                                    <ListItemText secondary="Contact" />
                                </ListItemButton>
                            </Link>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </div>
    )
}