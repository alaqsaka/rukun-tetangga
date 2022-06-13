import React from 'react';
import { Grid, Typography, Button, Box } from '@mui/material';
import bestTeams from '../../../assets/images/bestTeams.jpg';
import useStyles from './styles';

const AboutUs = () => {
  const classes = useStyles();

  return (
    <Box className={classes.aboutUsContainer}>
      <Grid container spacing={6} className={classes.gridContainer}>
        <Grid item xs={12} md={5}>
          <img src={bestTeams} alt="My Team" className={classes.largeImage} />
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h3" fontWeight={700} className={classes.title}>
            We build, We revive
          </Typography>
          <Typography className={classes.aboutUsSubtitle}>
            Kami menyediakan fitur yang memudahkan admnistrasi dan memperat
            masyarakat dengan mudah dan gratis. Mendaftar dengan nomor telepon
            dan langsung gunakan sepuasnya
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ width: '200px', fontSize: '16px' }}
            style={{
              background:
                'linear-gradient(178.9deg, #0094FF 76.77%, rgba(0, 122, 255, 0.510417) 131.28%, rgba(0, 122, 255, 0) 120.06%)'
            }}
          >
            Hubungi Kami
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutUs;
