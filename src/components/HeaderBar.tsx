import React from 'react';
import { Box, Avatar } from '@mui/material';

export const HeaderBar: React.FC = () => {
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: 'primary.main', // Use theme's primary color
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingY: 2, // Adds padding on top and bottom
        marginBottom: 5, // Adds margin at the bottom of the header
        boxShadow: '0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12)',
      }}
    >
      {/* Circular logo placeholder */}
      <Avatar
        sx={{
          width: 60,
          height: 60,
          backgroundColor: 'white', // White background for the logo
        }}
      >
        {/* Placeholder for the logo */}
        <img
          src="/path/to/logo.png"  // Replace with your logo path
          alt="Logo"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </Avatar>
    </Box>
  );
};