// src/components/Navbar.js
import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const AdminNavbar = ({ toggleSidebar }) => {
  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleSidebar}
          sx={{ mr: 2, backgroundColor: 'black' }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          Admin Panel
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default AdminNavbar;
