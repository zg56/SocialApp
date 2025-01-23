import React from 'react';
import { Box, TextField } from '@mui/material';

export const CreatePostField: React.FC = () => {

  return (
     <Box>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Add new post"
        sx={{ marginBottom: 2 }}
        slotProps={{
          input:{sx: { borderRadius: '24px' }}
        }}
      />
    </Box>
  );
};