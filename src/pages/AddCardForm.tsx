import React, { useState } from 'react';
import { Card, CardContent, Typography, TextField, Button, Container} from '@mui/material';
import Grid from '@mui/material/Grid2';

export const AddCardForm: React.FC = () => {
  const [streetAddress, setStreetAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiration, setExpiration] = useState('');
  const [cvc, setCVC] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Submit form logic here
    console.log({ streetAddress, city, state, zip, nameOnCard, cardNumber, expiration, cvc });
  };

  return (
<Container>
  <Grid container spacing={2}>
    {/* Main Content (Posts & Filter) */}
    <Grid size={{ xs: 12, md: 9 }}>
      <Typography variant="h5" gutterBottom color="text.secondary">
        Add Card
      </Typography>
      <Card elevation={8} sx={{ borderRadius: '12px' }}>
        <CardContent>

          <form onSubmit={handleSubmit}>
            {/* Street Address */}
            <TextField
              label="Street Address"
              variant="outlined"
              fullWidth
              value={streetAddress}
              onChange={(e) => setStreetAddress(e.target.value)}
              sx={{ marginBottom: 2, color: "text.secondary"}}
            />

            {/* City */}
            <TextField
              label="City"
              variant="outlined"
              fullWidth
              value={city}
              onChange={(e) => setCity(e.target.value)}
              sx={{ marginBottom: 2, color: "text.secondary" }}
            />

            {/* State and Zip (side by side) */}
            <Grid container spacing={2}>
              <Grid size={6}>
                <TextField
                  label="State"
                  variant="outlined"
                  fullWidth
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  sx={{color: "text.secondary"}}
                />
              </Grid>
              <Grid size={6}>
                <TextField
                  label="Zip"
                  variant="outlined"
                  fullWidth
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                  sx={{color: "text.secondary"}}
                />
              </Grid>
            </Grid>

            {/* Name on the Card */}
            <TextField
              label="Name on the Card"
              variant="outlined"
              fullWidth
              value={nameOnCard}
              onChange={(e) => setNameOnCard(e.target.value)}
              sx={{ marginY: 2, color: "text.secondary" }}
            />

            {/* Card Number */}
            <TextField
              label="Card Number"
              variant="outlined"
              fullWidth
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              sx={{ marginBottom: 2, color: "text.secondary" }}
            />

            {/* Expiration Date and CVC (side by side) */}
            <Grid container spacing={2}>
              <Grid size={6}>
                <TextField
                  label="Expiration Date (MM/YY)"
                  variant="outlined"
                  fullWidth
                  value={expiration}
                  onChange={(e) => setExpiration(e.target.value)}
                  sx={{color: "text.secondary"}}
                />
              </Grid>
              <Grid size={6}>
                <TextField
                  label="CVC"
                  variant="outlined"
                  fullWidth
                  value={cvc}
                  onChange={(e) => setCVC(e.target.value)}
                  sx={{color: "text.secondary"}}
                />
              </Grid>
            </Grid>

            {/* Submit Button */}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ marginTop: 3 }}
            >
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </Grid>
  </Grid>
</Container>
  );
};