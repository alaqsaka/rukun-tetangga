import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  TextareaAutosize,
  Button
} from '@mui/material';
import useStyles from './styles';

const ContactUs = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const classes = useStyles();

  const submitForm = (e) => {
    e.preventDefault();
    console.log({ email, firstName, subject, message });
  };

  return (
    <Box className={classes.formContainer}>
      <Typography variant="h4" className={classes.formHeading}>
        Kontak Kami
      </Typography>
      <Box
        className={classes.form}
        component="form"
        noValidate
        autoComplete="off"
      >
        <TextField
          label="Full Name"
          variant="outlined"
          fullWidth
          className={classes.inputField}
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          className={classes.inputField}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          label="Subject"
          variant="outlined"
          fullWidth
          className={classes.inputField}
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />

        <TextareaAutosize
          aria-label="minimum height"
          minRows={6}
          placeholder="Enter a message"
          className={classes.textArea}
          spellCheck
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <Button
          variant="contained"
          type="submit"
          color="primary"
          sx={{ width: '200px', fontSize: '16px' }}
          onClick={submitForm}
          style={{
            background:
              'linear-gradient(178.9deg, #0094FF 76.77%, rgba(0, 122, 255, 0.510417) 131.28%, rgba(0, 122, 255, 0) 120.06%)'
          }}
        >
          Kirim
        </Button>
      </Box>
    </Box>
  );
};

export default ContactUs;
