import React from 'react';
import { Box, Divider, Typography } from '@mui/material';
import { Notification } from '../types/Notification';
import { NotificationCard } from './NotificationCard';

interface NotificationListProps {
  selectedFilter: string;
  notifications: Notification[];
}

export const NotificationList: React.FC<NotificationListProps> = ({ selectedFilter, notifications }) => {
  const filteredNotifications = notifications.filter((notification) => {
    if (selectedFilter === 'All') return true;
    return notification.type === selectedFilter.toLowerCase();
  });

  return (
    <Box sx={{backgroundColor: 'white', borderRadius: '12px', pb: 1,         
        boxShadow: '0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12)',    
    }}>
    {filteredNotifications.length > 0 ? (
      filteredNotifications.map((notification, index) => (
        <Box key={index}>
          <NotificationCard notification={notification} />
          {index < filteredNotifications.length - 1 && (
            <Divider sx={{ my: 2 }} /> 
          )}
        </Box>
      ))
    ) : (
        <Box>
            <Typography variant="body2" color="textSecondary" sx={{ textAlign: 'center', py: 2 }}>
                No notifications yet.
            </Typography>
            <Divider sx={{ my: 2 }} /> 
        </Box>


    )}
    </Box>
  );
};