import {
    Box,
    Drawer,
    Avatar,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import {
    Home as HomeIcon,
    AccountCircle as AccountCircleIcon,
    Mail as MailIcon,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { toggleDrawer } from "../features/todo/todoSlice";

export default function MainDrawer() {
    const dispatch = useDispatch();
    const showDrawer = useSelector((state) => state.todo.showDrawer);
    return (
        <div>
            <Drawer
                anchor="left"
                open={showDrawer}
                onClose={() => dispatch(toggleDrawer())}
            >
                <Box sx={{ width: 300 }}>
                    <Box
                        sx={{
                            height: 200,
                            background: "pink",
                            display: "flex",
                            alignItems: "end",
                        }}
                    >
                        <Avatar
                            sx={{
                                width: 75,
                                height: 75,
                                ml: 3,
                                mb: -5,
                            }}
                        ></Avatar>
                    </Box>

                    <List sx={{ mt: 10 }}>
                        <Link to="/" onClick={() => dispatch(toggleDrawer())}>
                            <ListItem>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <HomeIcon />
                                    </ListItemIcon>
                                    <ListItemText secondary="Home" />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                        <Link
                            to="/about"
                            onClick={() => dispatch(toggleDrawer())}
                        >
                            <ListItem>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <AccountCircleIcon />
                                    </ListItemIcon>
                                    <ListItemText secondary="About" />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                        <Link
                            to="/contact"
                            onClick={() => dispatch(toggleDrawer())}
                        >
                            <ListItem>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <MailIcon />
                                    </ListItemIcon>
                                    <ListItemText secondary="Contact" />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                    </List>
                </Box>
            </Drawer>
        </div>
    );
}
