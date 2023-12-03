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
              sx={{
                my: 2,
                color: 'white',
                display: 'block',
                fontWeight: 'bold',
              }}
            >
              <Typography style={{ fontWeight: 600 }}>About</Typography>
            </Link>
            <Link
              href="#portfolio"
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Portfolio
            </Link>
            <Link
              href="#resume"
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Resume
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </Box>
  );
}
export default Header;
