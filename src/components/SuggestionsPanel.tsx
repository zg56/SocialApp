import React from 'react';
import Divider from '@mui/material/Divider';
import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemText, TextField, Typography, useMediaQuery, useTheme } from '@mui/material';

export const SuggestionsPanel: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  if (isMobile) return null; // Hide on mobile

  // Mock data for suggestions
  const suggestions = [
    { id: 1, name: 'John Doe', profession: 'Cyclist', avatar: 'https://via.placeholder.com/40' },
    { id: 2, name: 'Jane Smith', profession: 'Distance Runner', avatar: 'https://via.placeholder.com/40' },
    { id: 3, name: 'Michael Brown', profession: 'Gymnast', avatar: 'https://via.placeholder.com/40' },
    { id: 4, name: 'Emily White', profession: 'Swimmer', avatar: 'https://via.placeholder.com/40' },
  ];

  return (
    <Box sx={{ width: '250px',
        padding: 2, 
        backgroundColor: 'white',
        boxShadow: '0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12)',
        borderRadius: '12px',
        mb: 1
        }}>
      <Typography variant="h6" color="text.secondary" sx={{ marginBottom: 2 }}>
        Suggestions
      </Typography>

      {/* Search Bar */}
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search accounts"
        sx={{ marginBottom: 2 }}
        slotProps={{
          input:{sx: { borderRadius: '24px' }}
        }}
      />

      {/* Suggestions List */}
      <List>
        {suggestions.map((suggestion) => (
          <ListItem key={suggestion.id}
            sx={{
            cursor: 'pointer',
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
            <ListItemAvatar>
              <Avatar src={suggestion.avatar} alt={suggestion.name} />
            </ListItemAvatar>
            <ListItemText
              primary={suggestion.name}
              secondary={suggestion.profession}
            />
          </ListItem>
        ))}
      </List>
      <Divider orientation="vertical" sx={{borderBottomWidth: 1, marginBottom: 2}} />
      <Typography variant="h6" color="text.secondary" sx={{ marginBottom: 2 }}>
        Expired subscriptions
      </Typography>

      {/* Expired List */}
      <Box  sx={{
       maxHeight: '280px',
       overflowX: 'hidden',
       overflowY: 'auto',
       borderRadius: '12px',
      }}>
        <List>
            {suggestions.map((suggestion) => (
            <ListItem key={suggestion.id}
              sx={{
                cursor: 'pointer',
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
                <ListItemAvatar>
                <Avatar src={suggestion.avatar} alt={suggestion.name} />
                </ListItemAvatar>
                <ListItemText
                primary={suggestion.name}
                secondary={suggestion.profession}
                />
            </ListItem>
            ))}
        </List>
      </Box>
    </Box>
  );
};
