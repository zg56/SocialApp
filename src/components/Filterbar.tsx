import React from 'react';
import { Box, Button } from '@mui/material';
//Typography import if needed

interface FilterBarProps {
  filters: string[];
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({ filters, selectedFilter, onFilterChange }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        overflowX: 'auto',
        p: 1,
        bgcolor: 'background.paper',
        '::-webkit-scrollbar': { display: 'none' },
        gap: 1, 
        marginBottom: 2,
        boxShadow: '0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12)',
        borderRadius: '12px'
      }}
    >
      {filters.map((filter) => (
        <Button
          key={filter}
          variant={selectedFilter === filter ? 'contained' : 'outlined'}
          onClick={() => onFilterChange(filter)}
          sx={{ 
            textTransform: 'none',     // Avoid all caps, keep the text as is
            whiteSpace: 'nowrap',      // Prevent text wrapping
            textOverflow: 'ellipsis',  // Apply ellipsis if text is too long
            overflow: 'hidden',        // Hide overflow text
            maxWidth: '150px',         // Set a reasonable max width for buttons
            minWidth: '80px',          // Ensure buttons aren't too small
            flexShrink: 0,             // Prevent buttons from shrinking
            fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' }, // Responsive font size
            mr: 1 }}
        >
          {filter}
        </Button>
      ))}
    </Box>
  );
};