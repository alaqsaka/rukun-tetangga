import React from 'react';
import { Grow, Container, Grid } from '@mui/material';
import { Activities, Form } from '../../components/organisms';

const Kegiatan = () => {
  return (
    <Grow in>
      <Container maxWidth="xl" style={{ marginTop: '80px' }}>
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
