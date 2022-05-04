import React from 'react';
import { Grid, Typography, Button, Box } from '@mui/material';
import friendsImg from '../../../assets/images/myteam.jpg';
import useStyles from './styles';

const Hero = () => {
  const classes = useStyles();

  return (
    <Box className={classes.heroBox} style={{ fontFamily: 'Poppins' }}>
      <Grid container spacing={6} className={classes.gridContainer}>
        <Grid item xs={12} md={7}>
          <Typography
            variant="h3"
            fontWeight={700}
            className={classes.title}
            style={{ fontFamily: 'Poppins' }}
          >
            Lets scale your business
          </Typography>
          <Typography
            variant="h6"
            className={classes.subtitle}
            style={{ fontFamily: 'Poppins' }}
          >
            Hire professionals who will help your business make 10X your
            previous income. With over 5years experience in Marketing & Business
            strategy, we are your best client.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ width: '200px', fontSize: '16px' }}
            style={{ fontFamily: 'Poppins' }}
          >
            HIRE US
          </Button>
        </Grid>
        <Grid item xs={12} md={5}>
          <img src={friendsImg} alt="My Team" className={classes.largeImage} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
