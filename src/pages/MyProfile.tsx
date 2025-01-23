import React, { useState } from 'react';
import {Box, Card, CardContent, Avatar, Typography, Button, IconButton, useTheme, useMediaQuery } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Divider from '@mui/material/Divider';
import SettingsIcon from '@mui/icons-material/Settings';
import InstagramIcon from '../assets/icons/InstagramIcon';
import XIcon from '../assets/icons/XIcon';
import SnapchatIcon from '../assets/icons/SnapchatIcon'; // Use a Snap equivalent icon
import TikTokIcon from '../assets/icons/TikTokIcon'; // Use a TikTok equivalent icon
import { Post } from '../types/Post';
import { PostCard } from '../components/Postcard';
import DefaultCover from '../assets/images/phelps_cover.png';
import NutritionMeal from '../assets/images/nutrition_meal.png';
import { EditProfileDialog } from '../components/EditProfileDialog'; // Import the dialog component
import { SocialLinks } from '../types/SocialLinks';
import { CreatePostButton } from '../components/CreatePostButton'; // FAB for Create Post

export const MyProfile: React.FC = () => {
  const [coverPhoto, setCoverPhoto] = useState<string | null>(null);
  const [profilePhoto, setProfilePhoto] = useState<string | null>(null);
  const [name, setName] = useState('John Doe');
  const [username] = useState('@johndoe'); // username is static
  const [bio, setBio] = useState(''); // Bio is empty initially
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [socialLinks, setSocialLinks] = useState<SocialLinks>({
    instagram: '',
    twitter: '',
    snapchat: '',
    tiktok: '',
  });

  const samplePosts: Post[] = [
    { id: 1, title: 'Exercise x', mediaType: 'image', description: 'Moment to never forget', likes: 120, mediaUrl: DefaultCover },
    { id: 2, title: 'Nutritional meal', mediaType: 'image', description: 'Nutritional meal made out of salad & avocados', likes: 120, mediaUrl: NutritionMeal },
    { id: 3, title: 'Exercise y', mediaType: 'video', description: 'Hiking through the mountains', likes: 200, mediaUrl: '/path/to/video.mp4' },
  ];

  const handleCoverPhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = URL.createObjectURL(e.target.files[0]);
      setCoverPhoto(file);
    }
  };

  const handleProfilePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = URL.createObjectURL(e.target.files[0]);
      setProfilePhoto(file);
    }
  };

  // Modal state
  const [editModalOpen, setEditModalOpen] = useState(false);

  // Handlers to open and close the dialog
  const handleEditModalOpen = () => {
    setEditModalOpen(true);
  };

  const handleEditModalClose = () => {
    setEditModalOpen(false);
  };

  return (
    <Box sx={{
      paddingBottom: isMobile ? '70px' : '0', // Add padding equivalent to the mobile panel's height
    }}>
      <Typography variant="h5" gutterBottom color="text.secondary">
        Profile
      </Typography>
      <Card elevation={8} sx={{ position: 'relative', mb: 3, borderRadius: '12px' }}>
        {/* Cover Photo */}
        <Box
          sx={{
            position: 'relative',
            height: '250px',
            '&:hover .cover-change-btn': {
              opacity: 1, // Show the button on hover
            },
          }}
        >
        <img
          src={coverPhoto || DefaultCover}
          alt="Cover"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        <input
          accept="image/*"
          style={{ display: 'none' }}
          id="cover-photo-upload"
          type="file"
          onChange={handleCoverPhotoUpload}
        />
        <label htmlFor="cover-photo-upload">
          <Button
            className="cover-change-btn"
            component="span"
            sx={{
              position: 'absolute',
              bottom: 8,
              right: 8,
              opacity: 0, // Initially hidden
              transition: 'opacity 0.3s ease-in-out',
              backgroundColor: 'rgba(0, 0, 0, 0.6)', // Subtle background
              color: 'white',
              fontSize: '12px',
              padding: '4px 12px',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.8)', // Darker on hover
              },
            }}
          >
            Change Cover
          </Button>
        </label>
        </Box>
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'row', // Always in a row, with bio next to the profile information
            alignItems: 'flex-start', // Align items to the start
            mt: -9, // Adjust margin if necessary
          }}
        >
          {/* Left Column: Profile Info (Profile photo, Name, Username, Social Links) */}
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'left', flexGrow: 0 }}>
            {/* Profile Photo */}
            <input
              accept="image/*"
              style={{ display: 'none' }}
              id="profile-photo-upload"
              type="file"
              onChange={handleProfilePhotoUpload}
            />
            <label htmlFor="profile-photo-upload">
              <Avatar
                src={profilePhoto || DefaultCover}
                alt="Profile"
                sx={{
                  width: 120,
                  height: 120,
                  cursor: 'pointer',
                  border: '3px solid white',
                  mb: 0, // Margin bottom for spacing below avatar
                }}
              />
            </label>

            {/* Name and Username */}
            <Typography variant="h5">{name}</Typography>
            <Typography variant="body2" color="textSecondary">
              {username}
            </Typography>

            {/* Social Links & Edit Button */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'left',
                justifyContent: 'left',
                gap: 1,
                mt: 1, // Spacing between username and social icons
                ml: '-10px'
              }}
            >
              <IconButton component="a" href={socialLinks.instagram || '#'} target="_blank" disabled={!socialLinks.instagram}>
                <InstagramIcon />
              </IconButton>

              <IconButton component="a" href={socialLinks.twitter || '#'} target="_blank" disabled={!socialLinks.twitter}>
                <XIcon />
              </IconButton>

              <IconButton component="a" href={socialLinks.snapchat || '#'} target="_blank" disabled={!socialLinks.snapchat}>
                <SnapchatIcon />
              </IconButton>

              <IconButton component="a" href={socialLinks.tiktok || '#'} target="_blank" disabled={!socialLinks.tiktok}>
                <TikTokIcon />
              </IconButton>

              <IconButton aria-label="Settings" onClick={handleEditModalOpen}>
                <SettingsIcon />
                <Typography variant="body2" color="textSecondary" sx={{ ml: 1 }}>
                  Edit Info
                </Typography>
              </IconButton>
            </Box>
            {isMobile && <Box
            sx={{
              flexGrow: 1,
              maxWidth: '100%', // Full width for mobile
              ml: 0, // Margin-left for desktop view
              mt: 1, // Margin-top for mobile view
              overflowWrap: 'break-word',
            }}
          >
            {/* Placeholder text or bio content */}
            <Typography variant="body2" color="textSecondary">
              {bio || 'Bio: This user has not added a bio yet.'}
            </Typography>
          </Box>
          }
          </Box>

          {/* Right Column: Bio Section */}
          {!isMobile && <Box
            sx={{
              flexGrow: 1,
              maxWidth: '60%', // Full width for mobile, 60% for desktop
              ml: 3, // Margin-left for desktop view
              mt: 8, // Margin-top for mobile view
              overflowWrap: 'break-word',
            }}
          >
            {/* Placeholder text or bio content */}
            <Typography variant="body2" color="textSecondary">
              {bio || 'Bio: This user has not added a bio yet.'}
            </Typography>
          </Box>
          }
        </CardContent>

    </Card>

      {/* Modal for editing profile */}
      <EditProfileDialog
        editModalOpen={editModalOpen}
        handleEditModalClose={handleEditModalClose}
        name={name}
        setName={setName}
        bio={bio}
        setBio={setBio}
        socialLinks={socialLinks}
        setSocialLinks={setSocialLinks}
      />
      <Divider orientation="vertical" sx={{borderBottomWidth: 1, marginBottom: 2}} />
      <Typography variant="h5" gutterBottom color="text.secondary">
        Your posts
      </Typography>
      {/* User Posts */}
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 12 }}>
          <div>
            {samplePosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </Grid>
      </Grid>
      {/* Floating Action Button for creating a new post */}
      <CreatePostButton />
    </Box>
  );
};
