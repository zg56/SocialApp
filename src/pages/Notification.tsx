import React from 'react';
import { Container, Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { SuggestionsPanel } from '../components/SuggestionsPanel'; // Right Panel
import { Notifications } from '../components/Notifications'

export const Notification: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));



  return (
    <Container maxWidth="lg" sx={{padding: isMobile ? 0 : 3, paddingBottom: isMobile ? '70px' : '0'}}>
      <Typography variant="h5" gutterBottom color="text.secondary">
        Notifications
      </Typography>
      <Grid container spacing={2}>
        {/* Main Content (Posts & Filter) */}
        <Grid size={{ xs: 12, md: 9 }}>
            <Notifications/>
        </Grid>

        {/* Right Panel (Suggestions) */}
        <Grid size={{ xs: 12, md: 3 }}>
        <Box
            sx={{
              position: 'sticky',
              alignSelf: 'flex-start',
              top: '73px'
            }}>
            <SuggestionsPanel />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
