import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { Timeline } from './pages/Timeline';
import { AddCardForm } from './pages/AddCardForm';
import { MyProfile } from './pages/MyProfile';
import { Notification } from './pages/Notification';
import Following  from './pages/Following';
import { Polls }  from './pages/Polls';
import { theme } from './theme/theme';
import { Layout } from './components/Layout';

import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
      <Routes>
          {/* Wrap all routes with the Layout */}
          <Route
            path="/"
            element={
              <Layout>
                <Timeline />  {/* Timeline page content */}
              </Layout>
            }
          />
          <Route
            path="/add-card"
            element={
              <Layout>
                <AddCardForm /> {/* Add Card form page content */}
              </Layout>
            }
          />
          <Route
            path="/my-profile"
            element={
              <Layout>
                <MyProfile /> {/* My Profile page content */}
              </Layout>
            }
          />
          <Route
            path="/following"
            element={
              <Layout>
                <Following /> {/* My Profile page content */}
              </Layout>
            }
          />
          <Route
            path="/notifications"
            element={
              <Layout>
                <Notification /> {/* My Profile page content */}
              </Layout>
            }
          />
          <Route
            path="/polls"
            element={
              <Layout>
                <Polls /> {/* Polls page content */}
              </Layout>
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
