export interface Notification {
    profileImage: string;
    name: string;
    username: string;
    text: string;
    date: string;
    type: 'polls' | 'subscriptions' | 'promotions' | 'other';
  }
  