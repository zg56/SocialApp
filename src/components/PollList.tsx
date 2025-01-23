import React from 'react';
import { Box, Typography } from '@mui/material';
import { PollCard } from './PollCard';

type PollListProps = {
  polls: {
    id: string;
    question: string;
    options: { option: string; votes: number }[];
  }[];
  onVote: (pollId: string, selectedOption: string) => void;
  votedPolls: { [key: string]: string }; // Poll ID mapped to selected option
};

export const PollList: React.FC<PollListProps> = ({ polls, onVote, votedPolls }) => {
  return (
    <Box>
      {polls.length > 0 ? (
        polls.map((poll) => (
          <PollCard
            key={poll.id}
            poll={poll}
            onVote={onVote}
            votedOption={votedPolls[poll.id]} // Pass the voted option if the user already voted
          />
        ))        
      ): (
        <Typography>No polls available yet.</Typography>
      )}
    </Box>
  );
};