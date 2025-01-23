import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, RadioGroup, FormControlLabel, Radio, Box, LinearProgress } from '@mui/material';

type PollCardProps = {
  poll: {
    id: string;
    question: string;
    options: { option: string; votes: number }[];
  };
  onVote: (pollId: string, selectedOption: string) => void;
  votedOption?: string;
};

export const PollCard: React.FC<PollCardProps> = ({ poll, onVote, votedOption }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleVote = () => {
    if (selectedOption) {
      onVote(poll.id, selectedOption);
    }
  };

  return (
    <Card elevation={8} sx={{ mb: 2, borderRadius: '12px' }}>
      <CardContent>
        <Typography variant="h6">{poll.question}</Typography>
        {votedOption ? (
          <Box>
            <Typography variant="subtitle1">Results:</Typography>
            {poll.options.map((option, idx) => (
              <Box key={idx}>
                <Typography>{option.option}</Typography>
                <LinearProgress
                  variant="determinate"
                  value={(option.votes / poll.options.reduce((sum, opt) => sum + opt.votes, 0)) * 100}
                  sx={{ mb: 1 }}
                />
              </Box>
            ))}
          </Box>
        ) : (
          <RadioGroup onChange={(e) => setSelectedOption(e.target.value)}>
            {poll.options.map((option, idx) => (
              <FormControlLabel
                key={idx}
                value={option.option}
                control={<Radio />}
                label={option.option}
              />
            ))}
          </RadioGroup>
        )}
        {!votedOption && (
          <Button
            variant="contained"
            color="primary"
            onClick={handleVote}
            disabled={!selectedOption}
          >
            Vote
          </Button>
        )}
      </CardContent>
    </Card>
  );
};