import React from 'react';
import { useSelector } from 'react-redux';
import Activity from './Activity/Activity';
import { Grid, CircularProgress } from '@mui/material';
import useStyles from './styles';

const Activities = ({ setCurrentId }) => {
  const activities = useSelector((state) => state.activities);
  const classes = useStyles();
  console.log(activities);
  // console.log(JSON.parse(activities[0].selectedFile));
  return (
    // Jika engga ada value di dalam array activities maka tampilkan circularprogress
    <div style={{ marginTop: '20px' }}>
      {!activities.length ? (
        <CircularProgress />
      ) : (
        <Grid
          className={classes.container}
          container
          alignItems="stretch"
          spacing={3}
        >
          {activities.map((activity) => (
            <Grid item key={activity._id} xs={12} sm={6}>
              <Activity activity={activity} setCurrentId={setCurrentId} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default Activities;