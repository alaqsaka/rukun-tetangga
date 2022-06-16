/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Grow, Grid, Typography } from '@mui/material';
import { Activities, Form } from '../../components/organisms';
import { useDispatch } from 'react-redux';
import { getActivities } from '../../actions/activities';
import useStyles from './styles.js';

const Kegiatan = () => {
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  useEffect(() => {
    if (user) {
      dispatch(getActivities(user.result.community_id));
    }
  }, [currentId, dispatch]);

  return (
    <Grow in>
      {user ? (
        <div>
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
            {user.result.role === 'ketua' && (
              <Grid item xs={12} sm={12} md={4}>
                <Form currentId={currentId} setCurrentId={setCurrentId} />
              </Grid>
            )}
          </Grid>
        </div>
      ) : (
        <div>Login terlebih dahulu untuk mengakses halaman ini </div>
      )}
    </Grow>
  );
};

export default Kegiatan;
