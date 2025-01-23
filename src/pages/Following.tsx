import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, Container, Avatar, Button, Dialog, DialogActions, DialogContent, DialogTitle, useTheme, useMediaQuery } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Subscriber } from '../types/Subscriber';
import { SuggestionsPanel } from '../components/SuggestionsPanel'; // Right Panel
import { MobileSearchBar } from '../components/MobileSearchBar'; 

import DefaultImage from '../assets/images/phelps_cover.png'; // placeholder for actual image if no data found
import DefaultCover from '../assets/images/phelps_cover.png';


const subscribersData: Subscriber[] = [
  {
    id: 1,
    name: 'John Doe',
    username: '@johndoe',
    profilePhoto: DefaultCover,
    coverPhoto: DefaultCover,
  },
  {
    id: 2,
    name: 'Jane Smith',
    username: '@janesmith',
    profilePhoto: DefaultCover,
    coverPhoto: DefaultCover,
  },
  {
    id: 3,
    name: 'Jane Smith',
    username: '@janesmith',
    profilePhoto: DefaultCover,
    coverPhoto: DefaultCover,
  },  {
    id: 4,
    name: 'Jane Smith',
    username: '@janesmith',
    profilePhoto: DefaultCover,
    coverPhoto: DefaultCover,
  },  {
    id: 5,
    name: 'Jane Smith',
    username: '@janesmith',
    profilePhoto: DefaultCover,
    coverPhoto: DefaultCover,
  }
];

const Following: React.FC = () => {
  const [subscribers, setSubscribers] = useState<Subscriber[]>(subscribersData); // State to manage subscribers list
  const [openDialog, setOpenDialog] = useState(false); // Dialog state
  const [selectedSubscriber, setSelectedSubscriber] = useState<Subscriber | null>(null); // Manage selected subscriber
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Handle open dialog
  const handleOpenDialog = (subscriber: Subscriber) => {
    setSelectedSubscriber(subscriber);
    setOpenDialog(true);
  };

  // Handle close dialog
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  // Handle unsubscribe action
  const handleUnsubscribe = () => {
    if (selectedSubscriber) {
      setSubscribers(subscribers.filter((sub) => sub.id !== selectedSubscriber.id));
    }
    handleCloseDialog();
  };

  return (
  <Container maxWidth="lg">
    <Box sx={{ padding: isMobile ? 0 : '', paddingBottom: isMobile ? '70px' : '0', }}>
        <Typography variant="h5" gutterBottom color="text.secondary">
        Following
      </Typography>
      <MobileSearchBar />
      {subscribers.length === 0 ? (
        <Box sx={{ textAlign: 'left', marginTop: 5 }}>
          <img src={DefaultImage} alt="No subscriptions" style={{ width: 300, height: 300 }} />
          <Typography variant="h6" color="textSecondary">
            No subscriptions yet.
          </Typography>
        </Box>
      ) : (
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 9 }}  >
          {subscribers.map((subscriber) => (
            <Card key={subscriber.id} elevation={8} sx={{ position: 'relative', mb: 3, borderRadius: '12px', width: isMobile ? '100%' : '45%', display: 'inline-table', mr: 3 }}>
              <Box sx={{ position: 'relative' }}>
                {/* Cover Photo */}
                <img src={subscriber.coverPhoto} alt="Cover" style={{ width: '100%', height: 140, objectFit: 'cover' }} />

                {/* Profile Photo overlapping the cover photo */}
                <Avatar
                  src={subscriber.profilePhoto}
                  alt={subscriber.name}
                  sx={{
                    width: 80,
                    height: 80,
                    position: 'absolute',
                    top: 90, // Adjust position to overlap
                    left: 16,
                    border: '3px solid white',
                  }}
                />
              </Box>

            <CardContent sx={{ marginTop: 4 }}>
              <Typography variant="h6">{subscriber.name}</Typography>
              <Typography variant="body2" color="textSecondary">
                {subscriber.username}
              </Typography>

              {/* Subscribed Button */}
              <Button
                variant="outlined"
                color="primary"
                sx={{
                  marginTop: 2,
                  borderColor: 'grey.400', // Grey outline
                  color: 'primary.main', // Primary colored text
                  ':hover': { borderColor: 'primary.main' }, // Change color on hover
                }}
                onClick={() => handleOpenDialog(subscriber)}
              >
                Subscribed
              </Button>
            </CardContent>
          </Card>
          ))}
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
      )}
      
      {/* Unsubscribe Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Unsubscribe</DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to unsubscribe from {selectedSubscriber?.name} ({selectedSubscriber?.username})?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleUnsubscribe} color="secondary">
            Unsubscribe
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  </Container>
  );
};

export default Following;