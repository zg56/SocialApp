// src/theme/theme.ts
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',  // Main primary color
      contrastText: '#fff',  // Text color for primary buttons
    },
    secondary: {
      main: '#dc004e',  // Main secondary color
    },
    background: {
      default: '#f4f6f8',  // Default background color for the app
      paper: '#fff',  // Background for cards, dialogs, etc.
    },
    text: {
      primary: '#333',  // Default text color
      secondary: '#555',  // Secondary text color
    }
  },
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",  // Font stack
    h1: {
      fontSize: '2rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '1.75rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
      color: '#333',
    },
    body2: {
      fontSize: '0.875rem',
      color: '#555',
    },
  },
  breakpoints: {
    values: {
      xs: 0,      // Extra small devices
      sm: 600,    // Small devices (tablets)
      md: 900,    // Medium devices (laptops)
      lg: 1200,   // Large devices (desktops)
      xl: 1536,   // Extra large devices
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '12px',  // Global button border radius
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          color: '#1976d2',  // Custom color for h1
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '12px', // For outlined text field
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: '12px',  // For filled and standard text field
        },
      },
    },
  },
});