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
          <CardMedia
            component="img"
            image={Me}
            height={100}
            sx={{ objectFit: 'contain' }}
          />
          <CardContent>
            <Typography>
              Motivated Web Developer with strong problem-solving skills, and
              exceptional attention to detail seeking technology roles. I have
              experience with multiple coding languages, a strong ability to
              learn new concepts easily and make an excellent team player. Able
              to adapt quickly to shifting priorities and ongoing changes in
              work.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default About;
