import React, { useState } from 'react';
import { Box, Typography, Divider, Card, CardContent } from '@mui/material';
import { PollCreateForm } from '../components/PollCreateForm';
import { PollList } from '../components/PollList';

type Poll = {
  id: string;
  question: string;
  options: { option: string; votes: number }[];
};

export const Polls: React.FC = () => {
  const [polls, setPolls] = useState<Poll[]>([]);
  const [votedPolls, setVotedPolls] = useState<{ [key: string]: string }>({});

  const handleCreatePoll = (newPoll: { question: string; options: string[] }) => {
    const poll: Poll = {
      id: Date.now().toString(),
      question: newPoll.question,
      options: newPoll.options.map((opt) => ({ option: opt, votes: 0 })),
    };
    setPolls([poll, ...polls]);
  };

  const handleVote = (pollId: string, selectedOption: string) => {
    setPolls(
      polls.map((poll) =>
        poll.id === pollId
          ? {
              ...poll,
              options: poll.options.map((opt) =>
                opt.option === selectedOption ? { ...opt, votes: opt.votes + 1 } : opt
              ),
            }
          : poll
      )
    );
    setVotedPolls({ ...votedPolls, [pollId]: selectedOption });
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Card elevation={8} sx={{  borderRadius: '12px' }}>
        <CardContent>
            <Typography variant="h4" gutterBottom>
                Polls
            </Typography>
            
            <Divider sx={{ mb: 3 }} />

            <PollCreateForm onCreatePoll={handleCreatePoll} />
        </CardContent>
      </Card>
      <Typography sx={{ mt: 3 }} variant="h5" gutterBottom>
        Active Polls
      </Typography>
      <PollList polls={polls} onVote={handleVote} votedPolls={votedPolls} />
    </Box>
  );
};