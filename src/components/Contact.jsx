import {
  Box,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import LoadingButton from '@mui/lab/LoadingButton';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { validateEmail } from '../utils/helpers';

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    message: '',
  });
  const [responseMessage, setResponseMessage] = useState({
    message: '',
    type: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBlur = (e) => {
    if (e.target.name == 'name' && !formData.name) {
      setResponseMessage({
        message: 'A name is required',
        type: 'warning',
      });
    }

    if (e.target.name == 'email' && !formData.email) {
      setResponseMessage({
        message: 'An email is required',
        type: 'warning',
      });
    }

    if (e.target.name == 'message' && !formData.message) {
      setResponseMessage({
        message: 'A message is required',
        type: 'warning',
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let form = document.getElementById('contact-me-form');

    if (!formData.email || !formData.message) {
      setResponseMessage({ message: 'Error submitting form', type: 'error' });
      return;
    }
    if (!validateEmail(formData.email)) {
      setResponseMessage({
        message: 'Invalid email',
        type: 'error',
      });
      return;
    }

    setLoading(true);

    emailjs
      .sendForm(
        'service_6h4pr4l',
        'template_evnfqy4',
        form,
        'PxMhiUDWHXscB-zBe'
      )
      .then(
        (result) => {
          console.log(result.text);
          setResponseMessage({
            message: 'Email sent successfully',
            type: 'success',
          });
          setFormData({ name: '', email: '', message: '' });
          setLoading(false);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Box className="contact-me" id="contact">
      <Typography variant="h2" margin={3} textAlign={'center'}>
        Contact Me
      </Typography>
      <Grid container justifyContent={'center'}>
        <Grid item sm={10} md={10} lg={7} textAlign={'center'}>
          <Card>
            <CardContent>
              <form id="contact-me-form">
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  margin={3}
                >
                  <TextField
                    id="name-form"
                    label="Your Name"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    margin="dense"
                    fullWidth
                  />
                  <TextField
                    id="email-form"
                    label="Your Email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    margin="dense"
                    fullWidth
                  />
                  <TextField
                    id="message-form"
                    label="Your Message Here"
                    multiline
                    rows={4}
                    name="message"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    margin="dense"
                    fullWidth
                  />
                </Box>
                <Typography>
                  {responseMessage
                    ? responseMessage.message
                    : console.log(responseMessage)}
                </Typography>
              </form>
              <LoadingButton
                onClick={handleSubmit}
                endIcon={<SendIcon />}
                loading={loading}
                loadingPosition="end"
                variant="contained"
              >
                <span>Send</span>
              </LoadingButton>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
