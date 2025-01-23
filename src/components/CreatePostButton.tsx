import React, { useState } from 'react';
import {
  Fab, Dialog, DialogContent, DialogTitle, useMediaQuery, useTheme, IconButton,
  TextField, Button, MenuItem, Select, InputLabel, FormControl, Box
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import { FilterBar } from '../components/Filterbar';  // Assuming you already have this component
import { FileUpload } from '../components/FileUpload';  // Import FileUpload component
import { filters } from '../constants/filters'; 

const previousWorkouts = ['Running', 'Cycling', 'Swimming'];  // Dummy workout data

export const CreatePostButton: React.FC = () => {
  const [open, setOpen] = useState(false); // Modal open state
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm')); // Fullscreen on mobile
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [postTitle, setPostTitle] = useState('');
  const [postDescription, setPostDescription] = useState('');
  const [workoutType, setWorkoutType] = useState<string>('');
  const [reps, setReps] = useState<number>(0);
  const [isNewWorkout, setIsNewWorkout] = useState(false);  // To add a new workout

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
    // Reset workout-specific fields if filter is changed
    if (filter !== 'Workout') {
      setWorkoutType('');
      setReps(0);
      setIsNewWorkout(false);
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    if (selectedFilter === 'Workout') {
      console.log({
        title: postTitle,
        workoutType,
        reps,
      });
    } else {
      console.log({
        title: postTitle,
        description: postDescription,
      });
    }
  };

  return (
    <>
      {/* Floating Action Button (FAB) */}
      <Fab
        color="primary"
        aria-label="add"
        onClick={handleOpen}  // Open the modal on FAB click
        sx={{
          position: 'fixed',
          bottom: fullScreen ? 80 : 16,
          right: 16,
        }}
      >
        <AddIcon />
      </Fab>

      {/* Modal Dialog for creating new post */}
      <Dialog
        fullScreen={fullScreen}  // Fullscreen for mobile screens
        open={open}
        onClose={handleClose}
        aria-labelledby="create-post-dialog"
      >
        <DialogTitle id="create-post-dialog">
          Create New Post
          <IconButton
            aria-label="close"
            onClick={handleClose}
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
          {/* Filter Bar */}
          <FilterBar
            filters={filters.filter((filter) => filter !== 'All')}
            selectedFilter={selectedFilter}
            onFilterChange={handleFilterChange}
          />

          {/* Title Input */}
          <TextField
            label="Post Title"
            variant="outlined"
            fullWidth
            sx={{ marginY: 2 }}
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
          />

          {/* Conditionally Render Fields Based on Selected Filter */}
          {selectedFilter === 'Workout' ? (
            <Box>
              {/* Workout Type Selection */}
              <FormControl fullWidth sx={{ marginY: 2 }}>
                <InputLabel id="workout-type-label">Workout Type</InputLabel>
                <Select
                  labelId="workout-type-label"
                  value={isNewWorkout ? '' : workoutType}
                  onChange={(e) => setWorkoutType(e.target.value)}
                  disabled={isNewWorkout} // Disable dropdown if adding a new workout
                >
                  {previousWorkouts.map((workout) => (
                    <MenuItem key={workout} value={workout}>
                      {workout}
                    </MenuItem>
                  ))}
                  <MenuItem value="new" onClick={() => setIsNewWorkout(true)}>
                    Add New Workout
                  </MenuItem>
                </Select>
              </FormControl>

              {/* If adding a new workout */}
              {isNewWorkout && (
                <TextField
                  label="New Workout Name"
                  variant="outlined"
                  fullWidth
                  sx={{ marginY: 2 }}
                  value={workoutType}
                  onChange={(e) => setWorkoutType(e.target.value)}
                />
              )}

              {/* Reps Input */}
              <TextField
                label="Reps"
                variant="outlined"
                fullWidth
                type="number"
                sx={{ marginY: 2 }}
                value={reps}
                onChange={(e) => setReps(Number(e.target.value))}
              />
            </Box>
          ) : (
            <TextField
              label="Post Description"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              sx={{ marginY: 2 }}
              value={postDescription}
              onChange={(e) => setPostDescription(e.target.value)}
            />
          )}

          {/* File Upload Component */}
          <FileUpload />

          {/* Submit Button */}
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginTop: 2 }}
            onClick={handleSubmit}
          >
            Submit Post
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
};