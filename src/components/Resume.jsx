import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Link,
  Typography,
} from '@mui/material';

import myResume from '../assets/Resume.pdf';

const Resume = () => {
  return (
    <Box className="resume" id="resume">
      <Typography variant="h2" margin={3} textAlign={'center'}>
        Resume
      </Typography>
      <Grid container justifyContent={'center'}>
        <Grid item sm={10} md={10} lg={5} textAlign={'center'}>
          <Card>
            <CardMedia component="iframe" src={myResume} height={800} />
            <CardContent>
              <Link
                href={myResume}
                download="Steven_Hanson_Resume"
                target="_blank"
                rel="noreferrer"
              >
                <Button component="a">Download</Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Resume;
