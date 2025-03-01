import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText, Drawer, useMediaQuery, useTheme } from '@mui/material';
import { BiBarChartAlt } from "react-icons/bi";
import { MdAddShoppingCart } from "react-icons/md";
import { MdNoteAdd } from "react-icons/md";
import { MdPermContactCalendar } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { MdBrowserUpdated } from "react-icons/md";
import { TiThSmallOutline } from "react-icons/ti";
import { IoIosHome } from "react-icons/io";




const Sidebar = ({ isOpen, toggleSidebar }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Drawer
            variant={isMobile ? 'temporary' : 'persistent'}
            open={isOpen}
            onClose={toggleSidebar}
            sx={{
                width: 250,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: 250,
                    boxSizing: 'border-box',
                },
            }}
        >
            <List sx={{ marginTop: 10 }}>
                <ListItem button component={Link} to="/home" onClick={toggleSidebar}>
                    <IoIosHome style={{ fontSize: 30, marginRight: 20 }} />

                    <ListItemText primary="Home" />
                </ListItem>

                <ListItem button component={Link} to="/admin-pannel/dashboard" onClick={toggleSidebar}>
                    <BiBarChartAlt style={{ fontSize: 30, marginRight: 20 }} />
                    <ListItemText primary="DashBoard" />
                </ListItem>

                <ListItem button component={Link} to="/admin-pannel/GSTBlogs" onClick={toggleSidebar}>
                    <MdNoteAdd style={{ fontSize: 30, marginRight: 20 }} />
                    <ListItemText primary="Add GST Blog" />
                </ListItem>

                <ListItem button component={Link} to="/admin-pannel/IncomeTaxBlog" onClick={toggleSidebar}>
                    <MdNoteAdd style={{ fontSize: 30, marginRight: 20 }} />
                    <ListItemText primary="Add Income Tax Blog" />
                </ListItem>

            </List>
        </Drawer>
    );
};

export default Sidebar;
