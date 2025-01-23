import React, { useState } from 'react';
import { Box, Typography, IconButton, Tooltip } from '@mui/material';
import LibraryAdd from '@mui/icons-material/LibraryAdd';

export const FileUpload: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);

      // Create a URL for the file so we can preview it
      const fileUrl = URL.createObjectURL(file);
      setPreviewUrl(fileUrl);
    }
  };

  return (
    <Box>
      <Typography variant="subtitle1" sx={{ marginY: 2 }}>Upload Image or Video</Typography>
      <input
        type="file"
        accept="image/*,video/*"
        onChange={handleFileChange}
        id="file-upload"
        style={{ display: 'none' }} // Hide the default file input
      />

      {/* Custom Upload Button with MUI Icon */}
      <label htmlFor="file-upload">
        <Tooltip title="Upload File">
          <IconButton
            component="span"
            color="primary"
            sx={{ width: 50, height: 50 }} // Adjust size as needed
          >
            <LibraryAdd />
          </IconButton>
        </Tooltip>
      </label>

      {previewUrl && (
        <Box mt={2}>
          <Typography variant="subtitle1">Preview:</Typography>
          {/* Show image if it's an image */}
          {selectedFile?.type.startsWith('image/') && (
            <img src={previewUrl} alt="Preview" style={{ maxWidth: '100%', height: 'auto' }} />
          )}

          {/* Show video if it's a video */}
          {selectedFile?.type.startsWith('video/') && (
            <video src={previewUrl} controls style={{ maxWidth: '100%' }} />
          )}
        </Box>
      )}
    </Box>
  );
};