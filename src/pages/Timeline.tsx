import React from 'react';
import { Container, Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { SuggestionsPanel } from '../components/SuggestionsPanel'; // Right Panel
import { FilterBar } from '../components/Filterbar';
import { PostCard } from '../components/Postcard';
import { CreatePostButton } from '../components/CreatePostButton'; // FAB for Create Post
import { CreatePostField } from '../components/CreatePostField';
import { Post } from '../types/Post';
import { filters } from '../constants/filters';
import DefaultCover from '../assets/images/phelps_cover.png';
import NutritionMeal from '../assets/images/nutrition_meal.png';



// Sample post data (You can replace this with fetched data)
const samplePosts: Post[] = [
  { id: 1, title: 'Exercise x', mediaType: 'image', description: 'Moment to never forget', likes: 120, mediaUrl: DefaultCover },
  { id: 2, title: 'Nutritional meal', mediaType: 'image', description: 'Nutritional meal made out of salad & avocados', likes: 120, mediaUrl: NutritionMeal },
  { id: 3, title: 'Exercise y', mediaType: 'video', description: 'Hiking through the mountains', likes: 200, mediaUrl: '/path/to/video.mp4' },
];

export const Timeline: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = React.useState(filters[0]);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
  };

  return (
    <Container maxWidth="lg" sx={{padding: isMobile ? 0 : 3, paddingBottom: isMobile ? '70px' : '0'}}>
      <Typography variant="h5" gutterBottom color="text.secondary">
        Timeline
      </Typography>
      <Grid container spacing={2}>
        {/* Main Content (Posts & Filter) */}
        <Grid size={{ xs: 12, md: 9 }}>
          <CreatePostField/>
          {/* Horizontally scrollable filter bar */}
          <FilterBar filters={filters} selectedFilter={selectedFilter} onFilterChange={handleFilterChange} />

          {/* Posts */}
          <div>
            {samplePosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
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

      {/* Floating Action Button for creating a new post */}
      <CreatePostButton />
    </Container>
  );
};
