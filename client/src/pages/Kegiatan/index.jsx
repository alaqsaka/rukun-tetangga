import React, { useEffect, useState } from 'react';
import { Grow, Container, Grid, Typography } from '@mui/material';
import { Activities, Form } from '../../components/organisms';
import { useDispatch } from 'react-redux';
import { getActivities } from '../../actions/activities';
import useStyles from './styles.js';

const Kegiatan = () => {
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    dispatch(getActivities());
  }, [currentId, dispatch]);

  return (
    <Grow in>
      <Container maxWidth="xl" style={{ marginTop: '110px' }}>
        <Typography variant="h4">Kegiatan</Typography>
        <Grid
          container
          justifyContent="space-between"
          alignItems="stretch"
          spacing={2}
          className={classes.mainContainer}
        >
          <Grid item xs={12} sm={12} md={8}>
            <Activities setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Kegiatan;
