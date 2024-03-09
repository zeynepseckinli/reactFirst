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
    MdOutlineCode,
    MdOutlineWork,
    MdOutlineSchool,
    MdOutlineContactMail,
  } from 'react-icons/md';
  import React from 'react';
  
  
  export default function Sidebar() {
    const navigate = useNavigate();
    const location = useLocation();
  
    const buttons = [
      {
        label: 'Home',
        route: '/home',
        icon: <MdOutlineHome />,
      },
      {
        label: 'About',
        route: '/about',
        icon: <MdOutlineLocalLibrary />,
      },
      {
        label: 'Education',
        route: '/education',
        icon: <MdOutlineSchool />,
      },
      {
        label: 'Experience',
        route: '/experience',
        icon: <MdOutlineWork />,
      },
      {
        label: 'Projects',
        route: '/projects',
        icon: <MdOutlineCode />,
      },
      {
        label: 'Contact',
        route: '/contact',
        icon: <MdOutlineContactMail />,
      },
    ];
  
    return (
      <Card
        sx={{
          height: '100%', // Tüm alanı kaplayacak şekilde ayarlayın
          borderRadius: '1rem',
          overflow: 'hidden',
        }}
      >
        <List component="nav" dense>
          {buttons.map((button) => (
            <ListItemButton
              key={button.route}
              selected={location.pathname === button.route}
              onClick={() => navigate(button.route)}
              style={{ textAlign: 'left' }}
            >
              <ListItemIcon>{button.icon}</ListItemIcon>
              <ListItemText primary={button.label} style={{ textAlign: 'left', marginLeft: '-10px' }} />
            </ListItemButton>
          ))}
        </List>
      </Card>
    );
  }
  