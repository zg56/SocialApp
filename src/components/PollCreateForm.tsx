import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';

type PollCreateFormProps = {
  onCreatePoll: (poll: { question: string; options: string[] }) => void;
};

export const PollCreateForm: React.FC<PollCreateFormProps> = ({ onCreatePoll }) => {
  const [question, setQuestion] = useState<string>('');
  const [options, setOptions] = useState<string[]>(['']);
  
  const handleAddOption = () => {
    setOptions([...options, '']);
  };

  const handleOptionChange = (index: number, value: string) => {
    const updatedOptions = options.map((opt, idx) => (idx === index ? value : opt));
    setOptions(updatedOptions);
  };

  const handleCreatePoll = () => {
    if (question && options.filter(opt => opt).length > 1) {
      onCreatePoll({ question, options });
      setQuestion('');
      setOptions(['']);
    }
  };

  return (
    <Box sx={{ mb: 3 }}>
      <TextField
        label="Poll Question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        fullWidth
        sx={{ mb: 2 }}
      />
      {options.map((option, index) => (
        <TextField
          key={index}
          label={`Option ${index + 1}`}
          value={option}
          onChange={(e) => handleOptionChange(index, e.target.value)}
          fullWidth
          sx={{ mb: 1 }}
        />
      ))}
      {/* Row for buttons */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
        <Button variant="outlined" color="primary" onClick={handleAddOption}>
          Add Option
        </Button>

        <Button variant="contained" color="primary" onClick={handleCreatePoll}>
          Create Poll
        </Button>
      </Box>
    </Box>
  );
};