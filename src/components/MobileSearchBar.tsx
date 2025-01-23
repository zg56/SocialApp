import React from 'react';
import { Box, TextField, useMediaQuery, useTheme } from '@mui/material';

export const MobileSearchBar: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
     <Box>
        {isMobile &&<TextField
        fullWidth
        variant="outlined"
        placeholder="Search accounts"
        sx={{ marginBottom: 2 }}
        slotProps={{
          input:{sx: { borderRadius: '24px' }}
        }}
      />}
    </Box>
  );
};