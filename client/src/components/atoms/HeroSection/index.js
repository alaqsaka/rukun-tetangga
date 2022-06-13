/* eslint-disable no-unused-vars */
import React from 'react';
import { Grid, Typography, Button, Box } from '@mui/material';
import friendsImg from '../../../assets/images/myteam.jpg';
import useStyles from './styles';

const Hero = () => {
  const classes = useStyles();

  return (
    <Box className={classes.heroBox} style={{ fontFamily: 'Poppins' }}>
      <Grid container spacing={6} className={classes.gridContainer}>
        <Grid item xs={12} md={12} style={{ textAlign: 'center' }}>
          <Typography
            variant="h3"
            fontWeight={700}
            className={classes.title}
            style={{
              fontFamily: 'Poppins',
              maxWidth: '1000px',
              margin: '0 auto',
              lineHeight: '60px '
            }}
          >
            Manajemen keperluan RT dan RW anda dengan mudah
          </Typography>
          <Typography
            variant="h6"
            className={classes.subtitle}
            style={{
              fontFamily: 'Poppins',
              maxWidth: '800px',
              margin: '0 auto'
            }}
          >
            Kami menyediakan fitur yang memudahkan admnistrasi, kegiatan, data
            warga, dan memperat masyarakat
          </Typography>

          <div
            style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}
          >
            <Button
              variant="contained"
              color="primary"
              sx={{ width: '200px', fontSize: '16px' }}
              style={{
                fontFamily: 'Poppins',
                background:
                  'linear-gradient(178.9deg, #0094FF 76.77%, rgba(0, 122, 255, 0.510417) 131.28%, rgba(0, 122, 255, 0) 220.06%)'
              }}
            >
              Coba Sekarang
            </Button>
            <Button
              variant="outlined"
              color="primary"
              sx={{ width: '200px', fontSize: '16px' }}
              style={{
                fontFamily: 'Poppins',
                color:
                  'linear-gradient(178.9deg, #0094FF 76.77%, rgba(0, 122, 255, 0.510417) 131.28%, rgba(0, 122, 255, 0) 220.06%)'
              }}
            >
              Pelajari Lebih Lanjut
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} md={12}>
          {/* <img src={friendsImg} alt="My Team" className={classes.largeImage} /> */}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
