import { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';

// Create a custom theme
const theme = createTheme({
  typography: {
    fontFamily: '"Dancing Script", cursive',
  },
  palette: {
    primary: {
      main: '#ffffff',
    },
  },
});

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function App() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Target date: February 2, 2027
  const targetDate = new Date('2027-02-02T00:00:00').getTime();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          width: '100vw',
          height: '100vh',
          backgroundImage: 'url(/chris_proposing.heic)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'fixed',
          top: 0,
          left: 0,
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            zIndex: 1,
          },
        }}
      >
        {/* Navigation Bar */}
        <AppBar 
          position="absolute" 
          sx={{ 
            backgroundColor: 'transparent', 
            boxShadow: 'none',
            zIndex: 3,
            top: 0,
            left: 0,
            right: 0,
          }}
        >
          <Toolbar sx={{ justifyContent: 'center' }}>
            <Button 
              color="inherit" 
              sx={{ 
                fontSize: '1.2rem',
                fontWeight: 500,
                color: 'white',
                textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.1)',
                },
              }}
            >
              RSVP
            </Button>
          </Toolbar>
        </AppBar>

        {/* Main Content */}
        <Box 
          sx={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            px: 2,
          }}
        >
          {/* Wedding Title */}
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem', lg: '5.5rem' },
              fontWeight: 700,
              color: 'white',
              textShadow: '3px 3px 6px rgba(0,0,0,0.8)',
              mb: 4,
              fontFamily: '"Dancing Script", cursive',
            }}
          >
            Chris & Piyathi's Wedding
          </Typography>

          {/* Countdown Timer */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: { xs: 2, sm: 4 },
              alignItems: 'center',
              justifyContent: 'center',
              mt: 4,
            }}
          >
            <Box sx={{ textAlign: 'center' }}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                  fontWeight: 600,
                  color: 'white',
                  textShadow: '2px 2px 4px rgba(0,0,0,1)',
                  fontFamily: '"Dancing Script", cursive',
                }}
              >
                {timeLeft.days}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: '1rem', sm: '1.2rem' },
                  color: 'white',
                  textShadow: '2px 2px 4px rgba(0,0,0,1)',
                  fontFamily: '"Dancing Script", cursive',
                }}
              >
                Days
              </Typography>
            </Box>

            <Box sx={{ textAlign: 'center' }}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                  fontWeight: 600,
                  color: 'white',
                  textShadow: '2px 2px 4px rgba(0,0,0,1)',
                  fontFamily: '"Dancing Script", cursive',
                }}
              >
                {timeLeft.hours}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: '1rem', sm: '1.2rem' },
                  color: 'white',
                  textShadow: '2px 2px 4px rgba(0,0,0,1)',
                  fontFamily: '"Dancing Script", cursive',
                }}
              >
                Hours
              </Typography>
            </Box>

            <Box sx={{ textAlign: 'center' }}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                  fontWeight: 600,
                  color: 'white',
                  textShadow: '2px 2px 4px rgba(0,0,0,1)',
                  fontFamily: '"Dancing Script", cursive',
                }}
              >
                {timeLeft.minutes}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: '1rem', sm: '1.2rem' },
                  color: 'white',
                  textShadow: '2px 2px 4px rgba(0,0,0,1)',
                  fontFamily: '"Dancing Script", cursive',
                }}
              >
                Minutes
              </Typography>
            </Box>

            <Box sx={{ textAlign: 'center' }}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                  fontWeight: 600,
                  color: 'white',
                  textShadow: '2px 2px 4px rgba(0,0,0,1)',
                  fontFamily: '"Dancing Script", cursive',
                }}
              >
                {timeLeft.seconds}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: '1rem', sm: '1.2rem' },
                  color: 'white',
                  textShadow: '2px 2px 4px rgba(0,0,0,1)',
                  fontFamily: '"Dancing Script", cursive',
                }}
              >
                Seconds
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
