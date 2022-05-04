import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import useStyles from './styles';

const Footer = () => {
  //   const date = new Date().getFullYear();
  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1 }} className={classes.footerContainer}>
      <Typography className={classes.footerText}>
        Provided by{' '}
        <Link href="#" target="_blank" underline="none">
          Rukun Tetangga Team
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
