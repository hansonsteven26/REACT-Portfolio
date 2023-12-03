import { Box, Typography, Card, CardHeader, CardContent } from '@mui/material';

const Portfolio = () => {
  return (
    <Box id="portfolio" sx={{ display: 'flex', flexDirection: 'column' }}>
      <Typography variant="h2">Portfolio</Typography>
      <Card sx={{ display: 'flex', flexDirection: 'row' }}>
        <Card>
          <CardHeader title="project1" />
          <CardContent>Here's some projects I've worked on</CardContent>
        </Card>
        <Card>
          <CardHeader title="project2" />
          <CardContent>Here's some projects I've worked on</CardContent>
        </Card>
        <Card>
          <CardHeader title="project3" />
          <CardContent>Here's some projects I've worked on</CardContent>
        </Card>
        <Card>
          <CardHeader title="project4" />
          <CardContent>Here's some projects I've worked on</CardContent>
        </Card>
        <Card>
          <CardHeader title="project5" />
          <CardContent>Here's some projects I've worked on</CardContent>
        </Card>
        <Card>
          <CardHeader title="project6" />
          <CardContent>Here's some projects I've worked on</CardContent>
        </Card>
      </Card>
    </Box>
  );
};

export default Portfolio;
