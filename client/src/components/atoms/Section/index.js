import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import useStyles from './styles';

const Section = () => {
  const classes = useStyles();

  const sectionItems = [
    {
      id: 1,
      icon: <EngineeringOutlinedIcon sx={{ fontSize: 100 }} color="primary" />,
      sentence: 'Pengurus',
      desc: 'Daftar pengurus RT serta tugas dan jabatannya'
    },
    {
      id: 2,
      icon: <AllInclusiveIcon sx={{ fontSize: 100 }} color="primary" />,
      sentence: 'Agenda',
      desc: 'Berisi jadwal kegiatan yang akan diselenggarakan'
    },
    {
      id: 3,
      icon: <PaidOutlinedIcon sx={{ fontSize: 100 }} color="primary" />,
      sentence: 'Keuangan RT',
      desc: 'Berisi Laporan Keuangan RT, Iuran Warga, serta Koperasi'
    }
  ];
  return (
    <Box sx={{ flexGrow: 1, minHeight: '400px' }}>
      <Grid container className={classes.sectionGridContainer}>
        {sectionItems.map((item) => (
          <Grid
            item
            xs={12}
            md={3.5}
            minHeight={300}
            key={item.id}
            className={classes.sectionGridItem}
          >
            {item.icon}
            <Typography>{item.sentence}</Typography>
            <Typography>{item.desc}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Section;
