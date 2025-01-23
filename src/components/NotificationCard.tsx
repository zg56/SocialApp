import React from 'react';
import { Box, Avatar, Typography } from '@mui/material';
import { Notification } from '../types/Notification';

interface NotificationCardProps {
  notification: Notification;
}

export const NotificationCard: React.FC<NotificationCardProps> = ({ notification }) => {
  return (
    <Box sx={{ display: 'flex', mb: 2, ml: 2, pt: 2 }}>
      {/* Profile Image */}
      <Avatar src={notification.profileImage} alt={notification.name} sx={{ width: 50, height: 50, mr: 2 }} />
      
      {/* Notification Content */}
      <Box>
        <Typography variant="h6">{notification.name}</Typography>
        <Typography variant="body2" color="textSecondary">@{notification.username}</Typography>
        <Typography variant="body1" color="textSecondary" sx={{ mt: 1 }}>{notification.text}</Typography>
        <Typography variant="caption" color="textSecondary" sx={{ mt: 1 }}>
          {notification.date}
        </Typography>
      </Box>
    </Box>
  );
};