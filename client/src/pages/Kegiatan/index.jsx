import React, { useEffect } from 'react';
import { Grow, Container, Grid, Typography } from '@mui/material';
import { Activities, Form } from '../../components/organisms';
import { useDispatch } from 'react-redux';
import { getActivities } from '../../actions/activities';

const Kegiatan = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  return (
    <Grow in>
      <Container maxWidth="xl" style={{ marginTop: '110px' }}>
        <Typography variant="h4">Kegiatan</Typography>
        <Grid
          container
          justifyContent="space-between"
          alignItems="stretch"
          spacing={2}
        >
          <Grid item xs={12} sm={7}>
            <Activities />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Kegiatan;
