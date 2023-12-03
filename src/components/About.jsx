import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import Me from '../assets/Me.jpg';

const About = () => {
  return (
    <Box
      id="about"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '30vh',
      }}
    >
      <Typography variant="h2" sx={{ textAlign: 'center' }}>
        About Me
      </Typography>
      <Box sx={{ textAlign: 'center' }} width={'60vw'}>
        <Card>
          <CardMedia component="img" image={Me} height={100} sx={{ objectFit: 'contain' }} />
          <CardContent>
            <Typography>
              I am a full stack web developer with a background in sales and
              customer service. I have a passion for learning and problem
              solving,and I am a team player who enjoys collaborating with
              others. I am looking forward to working with a team of developers
              to create amazing applications.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default About;
