import { BottomNavigation, BottomNavigationAction, Box, Toolbar } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';

const Footer = () => {
  return (
    <Box id="footer" sx={{ position: 'fixed', bottom: 0, width: '100%' }}>
      <Toolbar sx={{ justifyContent: 'space-evenly' }}>
        <BottomNavigation showLabels>
          <BottomNavigationAction label={<GitHubIcon />} href='https://github.com/hansonsteven26' />
          <BottomNavigationAction label={<LinkedInIcon />} href='https://www.linkedin.com/in/steven-m-hanson/' />
          <BottomNavigationAction label={<StackedBarChartIcon />} href='https://stackoverflow.com/users/22432031/steve' />
        </BottomNavigation>
      </Toolbar>
    </Box>
  );
};

export default Footer;
