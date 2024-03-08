import {
    Card,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
  } from '@mui/material';
  import { useNavigate, useLocation } from 'react-router-dom';
  import {
    MdOutlineHome,
    MdOutlineLocalLibrary,
  } from 'react-icons/md';
  import React from 'react';
  
  export default function Sidebar() {
    const navigate = useNavigate();
    const location = useLocation();
  
  
    const buttons = [
            {
              label: 'Home',
              route: '/home',
            },
            {
              label: 'About',
              route: '/about',
            },
            {
              label: 'Contact',
              route: '/contact',
            },
            {
              label: 'Education',
              route: '/education',
            },
            {
              label: 'Experience',
              route: '/experience',
            },
            {
              label: 'Projects',
              route: '/projects',
            },
          ];
        
    return (
        <Card
        sx={{
          height: '90%',
          borderRadius: '1rem',
          overflow: 'hidden',
          position: 'fixed',
          left: 50,
        }}      >
        <List component="nav" dense>
          {buttons.map((button) => (
            <ListItemButton
              key={button.route}
              selected={location.pathname === button.route}
              onClick={() => navigate(button.route)}
              style={{ textAlign: 'left'}}>
              <ListItemIcon>{button.icon}</ListItemIcon>
              <ListItemText primary={button.label} style={{  textAlign: 'left', marginLeft: '8px'}} />


            </ListItemButton>
          ))}
        </List>
      </Card>
    );
  }
    
  