import {
  Box,
  Typography,
  Card,
  CardHeader,
  CardContent,
  Grid,
  CardMedia,
  Button,
} from '@mui/material';
import noteTaker from '../assets/noteTaker.png';
import passwordGenerator from '../assets/passwordGenerator.png';
import readmeCreator from '../assets/readmeCreator.png';
import socialNetworkAPI from '../assets/socialNetworkAPI.png';
import unleashTheFacts from '../assets/unleashTheFacts.png';
import wellnessWizard from '../assets/wellnessWizard.png';

const Portfolio = () => {
  return (
    <Box id="portfolio" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} pt={10}>
      <Typography variant="h2">Portfolio</Typography>
      <Grid container spacing={2}>
        <Grid item lg={4}>
          <Card>
            <CardHeader title="Note Taker" />
            <CardMedia
              component="img"
              image={noteTaker}
              height={300}
              sx={{ objectFit: 'contain' }}
            />
            <CardContent>
              <Grid container>
                <Grid item lg={12} py={2}>
                  <Typography textAlign={'center'}>
                    A program that lets you take notes
                  </Typography>
                </Grid>
                <Grid
                  container
                  item
                  direction="row"
                  gap={1}
                  pb={1.5}
                  justifyContent="space-evenly"
                >
                  <Button
                    component="a"
                    href="https://github.com/hansonsteven26/Note-Taker"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="contained"
                  >
                    View GitHub Repo
                  </Button>
                  <Button
                    component="a"
                    href="https://note-takerrrrrrrr-6665b5b6091b.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="contained"
                  >
                    View Project
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid item lg={4}>
          <Card>
            <CardHeader title="Password Generator" />
            <CardMedia
              component="img"
              image={passwordGenerator}
              height={300}
              sx={{ objectFit: 'contain' }}
            />
            <CardContent>
              <Grid container>
                <Grid item lg={12} py={2}>
                  <Typography textAlign={'center'}>
                    A website that generates a password for you
                  </Typography>
                </Grid>
                <Grid
                  container
                  item
                  direction="row"
                  gap={1}
                  pb={1.5}
                  justifyContent="space-evenly"
                >
                  <Button
                    component="a"
                    href="https://github.com/hansonsteven26/Password-Generator-Challenge3"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="contained"
                  >
                    View GitHub Repo
                  </Button>
                  <Button
                    component="a"
                    href="https://hansonsteven26.github.io/Password-Generator-Challenge3/ "
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="contained"
                  >
                    View Project
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid item lg={4}>
          <Card>
            <CardHeader title="README Creator" />
            <CardMedia
              component="img"
              image={readmeCreator}
              height={300}
              sx={{ objectFit: 'contain' }}
            />
            <CardContent>
              <Grid container>
                <Grid item lg={12} py={2}>
                  <Typography textAlign={'center'}>
                    A backend program that generates a README for you
                  </Typography>
                </Grid>
                <Grid
                  container
                  item
                  direction="row"
                  gap={1}
                  pb={1.5}
                  justifyContent="space-evenly"
                >
                  <Button
                    component="a"
                    href="https://github.com/hansonsteven26/ReadMe-Creator"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="contained"
                  >
                    View GitHub Repo
                  </Button>
                  <Button
                    disabled
                    variant="contained"
                  >
                    Backend Only
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid item lg={4}>
          <Card>
            <CardHeader title="Social Network API" />
            <CardMedia
              component="img"
              image={socialNetworkAPI}
              height={300}
              sx={{ objectFit: 'contain' }}
            />
            <CardContent>
              <Grid container>
                <Grid item lg={12} py={2}>
                  <Typography textAlign={'center'}>
                    A backend program that lets you create a social network with users, thoughts, and reactions
                  </Typography>
                </Grid>
                <Grid
                  container
                  item
                  direction="row"
                  gap={1}
                  pb={1.5}
                  justifyContent="space-evenly"
                >
                  <Button
                    component="a"
                    href="https://github.com/hansonsteven26/Social-Network-API"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="contained"
                  >
                    View GitHub Repo
                  </Button>
                  <Button
                    disabled
                    variant="contained"
                  >
                    Backend Only
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid item lg={4}>
          <Card>
            <CardHeader title="Unleash the Facts" />
            <CardMedia
              component="img"
              image={unleashTheFacts}
              height={300}
              sx={{ objectFit: 'contain' }}
            />
            <CardContent>
              <Grid container>
                <Grid item lg={12} py={2}>
                  <Typography textAlign={'center'}>
                    A website that lets you search for dog breeds and get facts about them
                  </Typography>
                </Grid>
                <Grid
                  container
                  item
                  direction="row"
                  gap={1}
                  pb={1.5}
                  justifyContent="space-evenly"
                >
                  <Button
                    component="a"
                    href="https://github.com/hansonsteven26/Melody-Muse"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="contained"
                  >
                    View GitHub Repo
                  </Button>
                  <Button
                    component="a"
                    href="https://hansonsteven26.github.io/Melody-Muse/"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="contained"
                  >
                    View Project
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid item lg={4}>
          <Card>
            <CardHeader title="Wellness Wizard" />
            <CardMedia
              component="img"
              image={wellnessWizard}
              height={300}
              sx={{ objectFit: 'contain' }}
            />
            <CardContent>
              <Grid container>
                <Grid item lg={12} py={2}>
                  <Typography textAlign={'center'}>
                    A website that tracks your health and wellness
                  </Typography>
                </Grid>
                <Grid
                  container
                  item
                  direction="row"
                  gap={1}
                  pb={1.5}
                  justifyContent="space-evenly"
                >
                  <Button
                    component="a"
                    href="https://github.com/JackStendeback/WellnessWizard"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="contained"
                  >
                    View GitHub Repo
                  </Button>
                  <Button
                    component="a"
                    href="https://wellness-wizard-c98198b06502.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="contained"
                  >
                    View Project
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Portfolio;
