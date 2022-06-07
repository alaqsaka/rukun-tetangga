import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Hero, Section, ContactUs, AboutSection } from '../../components/atoms';
import useStyles from './styles';
import { Typography, Grid, CircularProgress } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { getActivities } from '../../actions/activities';
import Activity from '../../components/organisms/Activities/Activity/Activity';
// services

import './styles.scss';
import { useHistory, useLocation } from 'react-router-dom';

const Welcome = () => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  useEffect(() => {
    //const token = user?.token;
    setUser(JSON.parse(localStorage.getItem('profile')));
    dispatch(getActivities());
  }, [location]);

  const activities = useSelector((state) => state.activities);
  console.log(activities);
  if (user) {
    console.log(user.result);
    if (user.result.role === 'ketua') {
      if (
        user.result.community_address === '' &&
        user.result.community_id === '' &&
        user.result.community_nama === ''
      ) {
        console.log('belum lengkap');
        history.push('/lengkapi-data');
      }
    } else {
      console.log('warga');
      if (user.result.community_id == '') {
        history.push('/lengkapi-data');
      }
    }
  }

  return (
    <div>
      {user ? (
        // Greet and time
        <>
          {/* // Greet and time */}
          <div style={{ justifyContent: 'space-between', display: 'flex' }}>
            <Typography variant="h5" style={{ fontSize: '36px' }}>
              Selamat datang,{' '}
              {user.result.jenisKelamin == 'pria' ? 'Pak' : 'Bu'}{' '}
              {user.result.namaDepan} {user.result.namaBelakang}
            </Typography>
            <div className={classes.time}>
              <CalendarMonthIcon fontSize="20px" style={{ fontSize: '20px' }} />
              <Typography variant="body1">Selasa, 7 Juni 2022</Typography>
            </div>
          </div>
          {/* // kegiatan */}
          <div style={{ marginTop: '14px' }}>
            <Typography
              variant="h6"
              style={{ color: '#9D9D9D', marginBottom: '14px' }}
            >
              Kegiatan RT 02 Alam Asri 1
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={12} md={12}>
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
                      <Grid item key={activity.id} xs={12} lg={3} sm={6} md={6}>
                        <Activity activity={activity} />
                      </Grid>
                    ))}
                  </Grid>
                )}
              </Grid>
            </Grid>
          </div>
        </>
      ) : (
        <>
          <Hero />
          <Section />
          <AboutSection />
          <ContactUs />
        </>
      )}
    </div>
  );
};

export default Welcome;
