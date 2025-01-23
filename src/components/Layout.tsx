import React, { ReactNode } from 'react';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { SettingsPanel } from './SettingsPanel'; // Your settings panel component
import { HeaderBar } from './HeaderBar'; // Your header bar component

interface LayoutProps {
    children: ReactNode;
  }
  
  export const Layout: React.FC<LayoutProps> = ({ children }) => {  return (
    <>
      <HeaderBar /> {/* Header Bar remains at the top */}

      <Container maxWidth="lg">
        <Grid container spacing={2}>
          {/* Left Panel (Settings) */}
          <Grid size={{ xs: 12, md: 3 }}>
            <SettingsPanel />
          </Grid>

          {/* Main Content */}
          <Grid size={{ xs: 12, md: 9 }}>
            {children}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};