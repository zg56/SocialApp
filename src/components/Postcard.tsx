import React from 'react';
import { Box, Typography, Card, CardMedia, CardContent, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Post } from '../types/Post';

interface PostCardProps {
  post: Post;
}

export const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <Card elevation={8}
        sx={{ marginBottom: 2 , borderRadius: '12px'}}>
      <CardContent>
        <Typography variant="h6">{post.title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {post.mediaType === 'image' ? 'Image Post' : 'Video Post'}
        </Typography>
      </CardContent>
      <CardMedia
        component={post.mediaType === 'image' ? 'img' : 'video'}
        src={post.mediaUrl}
        controls={post.mediaType === 'video'}
        alt={post.title}
        sx={{
          height: 300,
          objectFit: 'cover',
        }}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {post.description}
        </Typography>
        <Box display="flex" alignItems="center" mt={2}>
          <IconButton>
            <FavoriteIcon />
          </IconButton>
          <Typography>{post.likes} Likes</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
