import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import { Typography } from '@mui/material';

function Header() {
  const appBarStyle = {
    width: '100%',
    height: '14vh',
    /* Add other styles as needed */
  };

  return (
    <Box style={appBarStyle}>
      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        <AppBar>
          <Toolbar sx={{ justifyContent: 'space-evenly' }}>
            <Link
              href="#about"
              underline="none"
              sx={{
                my: 2,
                color: 'white',
                display: 'block',
                fontWeight: 'bold',
              }}
            >
              <Typography style={{ fontWeight: 600 }} variant='h4'>About</Typography>
            </Link>
            <Link
              href="#portfolio"
              underline="none"
              sx={{
                my: 2,
                color: 'white',
                display: 'block',
                fontWeight: 'bold',
              }}
            >
              <Typography style={{ fontWeight: 600 }} variant='h4'>Portfolio</Typography>
            </Link>
            <Link
              href="#resume"
              underline="none"
              sx={{
                my: 2,
                color: 'white',
                display: 'block',
                fontWeight: 'bold',
              }}
            >
              <Typography style={{ fontWeight: 600 }} variant='h4'>Resume</Typography>
            </Link>
            <Link
              href="#contact"
              underline="none"
              sx={{
                my: 2,
                color: 'white',
                display: 'block',
                fontWeight: 'bold',
              }}
            >
              <Typography style={{ fontWeight: 600 }} variant='h4'>Contact Me</Typography>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </Box>
  );
}
export default Header;
