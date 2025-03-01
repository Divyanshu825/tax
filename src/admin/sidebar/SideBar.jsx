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

                <ListItem button component={Link} to="/admin-pannel/addproduct" onClick={toggleSidebar}>
                    <MdNoteAdd style={{ fontSize: 30, marginRight: 20 }} />
                    <ListItemText primary="Add Product" />
                </ListItem>

                <ListItem button component={Link} to="/admin-pannel/allproduct" onClick={toggleSidebar}>
                    <TiThSmallOutline style={{ fontSize: 30, marginRight: 20 }} />
                    <ListItemText primary="All Product" />
                </ListItem>

                <ListItem button component={Link} to="/admin-pannel/updateproduct" onClick={toggleSidebar}>
                    <MdBrowserUpdated style={{ fontSize: 30, marginRight: 20 }} />
                    <ListItemText primary="Update Product" />
                </ListItem>

                <ListItem button component={Link} to="/admin-pannel/deleteproduct" onClick={toggleSidebar}>
                    <MdDeleteForever style={{ fontSize: 30, marginRight: 20 }} />
                    <ListItemText primary="Delete Product" />
                </ListItem>

                <ListItem button component={Link} to="/admin-pannel/contactdetails" onClick={toggleSidebar}>
                    <MdPermContactCalendar style={{ fontSize: 30, marginRight: 20 }} />
                    <ListItemText primary="Contact Details" />
                </ListItem>

                <ListItem button component={Link} to="/productdesc" onClick={toggleSidebar}>
                    <MdAddShoppingCart style={{ fontSize: 30, marginRight: 20 }} />
                    <ListItemText primary="Order Details" />
                </ListItem>

                {/* <ListItem button component={Link} to="/productdesc" onClick={toggleSidebar}>
                    <ListItemText primary="Product Description" />
                </ListItem> */}

                <ListItem button component={Link} to="/admin-pannel/test2" onClick={toggleSidebar}>
                    <ListItemText primary="Test2" />
                </ListItem>
            </List>
        </Drawer>
    );
};

export default Sidebar;
