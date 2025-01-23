import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PollIcon from '@mui/icons-material/Poll';
import FollowingIcon from '@mui/icons-material/Groups';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export const SettingsPanel: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();

  const handleAddCardClick = () => {
    navigate('/add-card');  // Navigates to Add Card page
  };

  const handleMyProfileClick = () => {
    navigate('/my-profile');  // Navigates to My Profile page
  };

  const handleFollowingClick = () => {
    navigate('/following');  // Navigates to Following page
  };

  const handleNotificationClick = () => {
    navigate('/notifications');  // Navigates to Notification page
  };

  const handlePollsClick = () => {
    navigate('/polls');  // Navigates to Notification page
  };

  const handleHomeClick = () => {
    navigate('/');  // Navigates to Home page
  };

  return (
    <Box
      sx={{
        position: isMobile ? 'fixed' : 'sticky', // Fixed at the bottom on mobile, sticky on larger screens
        bottom: isMobile ? 0 : 'auto', // Glue to bottom for mobile
        top: isMobile ? 'auto' : '73px', // Only apply top offset on larger screens
        width: isMobile ? '100%' : '250px', // Full width for mobile
        backgroundColor: isMobile ? 'white' : 'transparent', // Background color for mobile
        zIndex: isMobile ? 1000 : 'auto', // Bring it to the front on mobile
        boxShadow: isMobile ? '0 -2px 8px rgba(0, 0, 0, 0.1)' : 'none', // Add shadow for mobile
        ml: isMobile ? '-16px' : ''
      }}
    >
      <List
        sx={{
          display: 'flex',
          flexDirection: isMobile ? 'row' : 'column', // Row layout for mobile, column for desktop
          justifyContent: isMobile ? 'space-around' : 'flex-start', // Space between items on mobile
        }}
      >
        {/* Home */}
        <ListItem sx={{ width: isMobile ? '30px' : '100%', pl: isMobile ? '0' : '16px', pr: isMobile ? '0' : '16px'}}>
          <ListItemButton
            onClick={handleHomeClick}
            sx={{
                pl: isMobile ? 0 : '',
                borderRadius: '12px',
              '&:hover': {
                transform: 'scale(1.05)',
                backgroundColor: 'rgba(0, 0, 0, 0.08)',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                borderRadius: '12px'
              },
              transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
            }}
          >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            {!isMobile && <ListItemText primary="Home" />} {/* Hide text on mobile */}
          </ListItemButton>
        </ListItem>

        {/* Notifications */}
        <ListItem sx={{ width: isMobile ? '30px' : '100%', pl: isMobile ? '0' : '16px', pr: isMobile ? '0' : '16px' }}>
          <ListItemButton
            onClick={handleNotificationClick}
            sx={{
                pl: isMobile ? 0 : '',
                borderRadius: '12px',
              '&:hover': {
                transform: 'scale(1.05)',
                backgroundColor: 'rgba(0, 0, 0, 0.08)',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                borderRadius: '12px'
              },
              transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
            }}
          >
            <ListItemIcon>
              <NotificationsIcon />
            </ListItemIcon>
            {!isMobile && <ListItemText primary="Notifications" />}
          </ListItemButton>
        </ListItem>

        {/* Polls */}
        <ListItem sx={{ width: isMobile ? '30px' : '100%', pl: isMobile ? '0' : '16px', pr: isMobile ? '0' : '16px' }}>
          <ListItemButton
            onClick={handlePollsClick}
            sx={{
                pl: isMobile ? 0 : '',
                borderRadius: '12px',
              '&:hover': {
                transform: 'scale(1.05)',
                backgroundColor: 'rgba(0, 0, 0, 0.08)',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                borderRadius: '12px'
              },
              transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
            }}
          >
            <ListItemIcon>
              <PollIcon />
            </ListItemIcon>
            {!isMobile && <ListItemText primary="Polls" />}
          </ListItemButton>
        </ListItem>

        {/* Subscriptions */}
        <ListItem sx={{ width: isMobile ? '30px' : '100%', pl: isMobile ? '0' : '16px', pr: isMobile ? '0' : '16px' }}>
          <ListItemButton
          onClick={handleFollowingClick}
            sx={{
                pl: isMobile ? 0 : '',
                borderRadius: '12px',
              '&:hover': {
                transform: 'scale(1.05)',
                backgroundColor: 'rgba(0, 0, 0, 0.08)',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                borderRadius: '12px'
              },
              transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
            }}
          >
            <ListItemIcon>
              <FollowingIcon />
            </ListItemIcon>
            {!isMobile && <ListItemText primary="Following" />}
          </ListItemButton>
        </ListItem>

        {/* Add Card */}
        <ListItem sx={{ width: isMobile ? '30px' : '100%', pl: isMobile ? '0' : '16px', pr: isMobile ? '0' : '16px' }}>
          <ListItemButton
            onClick={handleAddCardClick}
            sx={{
                pl: isMobile ? 0 : '',
                borderRadius: '12px',
              '&:hover': {
                transform: 'scale(1.05)',
                backgroundColor: 'rgba(0, 0, 0, 0.08)',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                borderRadius: '12px'
              },
              transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
            }}
          >
            <ListItemIcon>
              <CreditCardIcon />
            </ListItemIcon>
            {!isMobile && <ListItemText primary="Add Card" />}
          </ListItemButton>
        </ListItem>

        {/* My Profile */}
        <ListItem sx={{ width: isMobile ? '30px' : '100%', pl: isMobile ? '0' : '16px', pr: isMobile ? '0' : '16px' }}>
          <ListItemButton
            onClick={handleMyProfileClick}
            sx={{
                pl: isMobile ? 0 : '',
                borderRadius: '12px',
              '&:hover': {
                transform: 'scale(1.05)',
                backgroundColor: 'rgba(0, 0, 0, 0.08)',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                borderRadius: '12px'
              },
              transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
            }}
          >
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            {!isMobile && <ListItemText primary="My Profile" />}
          </ListItemButton>
        </ListItem>

        {/* More */}
        <ListItem sx={{ width: isMobile ? '30px' : '100%', pl: isMobile ? '0' : '16px', pr: isMobile ? '0' : '16px' }}>
          <ListItemButton
            sx={{
                pl: isMobile ? 0 : '',
                borderRadius: '12px',
              '&:hover': {
                transform: 'scale(1.05)',
                backgroundColor: 'rgba(0, 0, 0, 0.08)',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                borderRadius: '12px'
              },
              transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
            }}
          >
            <ListItemIcon>
              <MoreHorizIcon />
            </ListItemIcon>
            {!isMobile && <ListItemText primary="More" />}
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};