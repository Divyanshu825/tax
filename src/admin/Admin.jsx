import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './sidebar/SideBar'
import AdminNavbar from './adminNavbar/AdminNavbar';

const Admin = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <div >
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <AdminNavbar toggleSidebar={toggleSidebar} />
      <Outlet />
    </div>
  )
}

export default Admin