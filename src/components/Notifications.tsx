import React, { useState } from 'react';
import { Box } from '@mui/material';
import { FilterBar } from './Filterbar';
import { NotificationList } from './NotificationList';
import { Notification } from '../types/Notification';
import { notificationFilters } from '../constants/notificationFilters';


export const Notifications: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState(notificationFilters[0]);

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
  };

  // Mock Notifications Data
  const notifications: Notification[] = [
    {
      profileImage: 'https://via.placeholder.com/50',
      name: 'John Doe',
      username: 'johndoe',
      text: 'You have a new poll invite!',
      date: '2 hours ago',
      type: 'polls',
    },
    {
      profileImage: 'https://via.placeholder.com/50',
      name: 'Jane Smith',
      username: 'janesmith',
      text: 'You have a new subscription update.',
      date: '5 hours ago',
      type: 'subscriptions',
    },
    {
      profileImage: 'https://via.placeholder.com/50',
      name: 'Acme Inc.',
      username: 'acmeinc',
      text: 'Check out our latest promotion!',
      date: '1 day ago',
      type: 'promotions',
    },
  ];

  return (
    <Box sx={{ maxWidth: '600px', mx: 'auto' }}>
      {/* Filter Bar */}
      <FilterBar filters={notificationFilters} selectedFilter={selectedFilter} onFilterChange={handleFilterChange} />

      {/* Notifications List */}
      <NotificationList selectedFilter={selectedFilter} notifications={notifications} />
    </Box>
  );
};