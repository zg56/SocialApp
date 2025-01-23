export interface Post {
    id: number;
    title: string;
    mediaType: 'image' | 'video';
    description: string;
    likes: number;
    mediaUrl: string;
  }