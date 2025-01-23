import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, useMediaQuery, useTheme, IconButton } from '@mui/material';
import Grid from '@mui/material/Grid2';
import CloseIcon from '@mui/icons-material/Close';
import { SocialLinks } from '../types/SocialLinks'; // Import types if they are defined elsewhere

interface EditProfileDialogProps {
  editModalOpen: boolean;
  handleEditModalClose: () => void;
  name: string;
  setName: (value: string) => void;
  bio: string;
  setBio: (value: string) => void;
  socialLinks: SocialLinks;
  setSocialLinks: (value: SocialLinks) => void;
}
export const EditProfileDialog: React.FC<EditProfileDialogProps> = ({ editModalOpen,
    handleEditModalClose,
    name,
    setName,
    bio,
    setBio,
    socialLinks,
    setSocialLinks }) => {

const theme = useTheme();
const fullScreen = useMediaQuery(theme.breakpoints.down('sm')); // Fullscreen on mobile

return (
    <Dialog
      open={editModalOpen}
      onClose={handleEditModalClose}
      fullScreen={fullScreen} // Fullscreen on mobile
      maxWidth="md" // Restrict size on larger screens
      fullWidth
    >
      <DialogTitle>
        Edit Profile
        <IconButton
            aria-label="close"
            onClick={handleEditModalClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
      
      <DialogContent>
        {/* Use Grid for layout */}
        <Grid container spacing={2} sx={{mt: 1}}>
          {/* Name */}
          <Grid size={{xs: 12, sm:6}} >
            <TextField
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
              sx={{ mb: 2 }}
            />
          </Grid>

          {/* Bio */}
          <Grid size={{xs: 12, sm:6}}>
            <TextField
              label="Bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              fullWidth
              sx={{ mb: 2 }}
            />
          </Grid>

          {/* Instagram */}
          <Grid size={{xs: 12, sm:6}}>
            <TextField
              label="Instagram"
              value={socialLinks.instagram}
              onChange={(e) => setSocialLinks({ ...socialLinks, instagram: e.target.value })}
              fullWidth
              sx={{ mb: 2 }}
            />
          </Grid>

          {/* Twitter */}
          <Grid size={{xs: 12, sm:6}}>
            <TextField
              label="Twitter"
              value={socialLinks.twitter}
              onChange={(e) => setSocialLinks({ ...socialLinks, twitter: e.target.value })}
              fullWidth
              sx={{ mb: 2 }}
            />
          </Grid>

          {/* Snapchat */}
          <Grid size={{xs: 12, sm:6}}>
            <TextField
              label="Snapchat"
              value={socialLinks.snapchat}
              onChange={(e) => setSocialLinks({ ...socialLinks, snapchat: e.target.value })}
              fullWidth
              sx={{ mb: 2 }}
            />
          </Grid>

          {/* TikTok */}
          <Grid size={{xs: 12, sm:6}}>
            <TextField
              label="TikTok"
              value={socialLinks.tiktok}
              onChange={(e) => setSocialLinks({ ...socialLinks, tiktok: e.target.value })}
              fullWidth
              sx={{ mb: 2 }}
            />
          </Grid>
        </Grid>
      </DialogContent>
      
      <DialogActions>
        <Button onClick={handleEditModalClose}             
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginTop: 2 }}>
          Save Changes
        </Button>
      </DialogActions>
    </Dialog>
  );
};