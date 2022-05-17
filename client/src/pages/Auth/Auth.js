/* eslint-disable no-unused-vars */
import React from 'react';
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
  TextField
} from '@mui/material';
import useStyles from './styles';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Input from './Input';

const Auth = () => {
  const classes = useStyles();

  const isSignup = true;

  const handleSubmit = () => {};

  const handleChange = () => {};

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name="namaDepan"
                  label="Nama Depan"
                  handleChange={handleChange}
                  autoFocus
                  xs={6}
                  half
                />
                <Input
                  name="namaBelakang"
                  label="Nama Belakang"
                  handleChange={handleChange}
                  autoFocus
                  xs={6}
                  half
                />
              </>
            )}
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
