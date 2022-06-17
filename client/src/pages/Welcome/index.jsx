/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Hero, Section, ContactUs, AboutSection } from '../../components/atoms';
import useStyles from './styles';
import axios from 'axios';
import { Typography, Grid, CircularProgress } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { getActivities } from '../../actions/activities';
import Activity from '../../components/organisms/Activities/Activity/Activity';
import contoh_foto from '../../assets/images/banner-foto.jpg';
// services

import './styles.scss';
import { useHistory, useLocation } from 'react-router-dom';

const Welcome = () => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();

  const [communityDetails, setCommunityDetails] = useState({});

  useEffect(() => {
    //const token = user?.token;

    setUser(JSON.parse(localStorage.getItem('profile')));

    if (user) {
      dispatch(getActivities(user.result.community_id));
      axios
        .get(
          `http://rukuntetangga-admin.my.id/community/${user.result.community_id}`
        )
        .then((response) => {
          setCommunityDetails(response.data.data);
          console.log(communityDetails);
        });
    }
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
            <Typography variant="h5" style={{ color: '#9D9D9D' }}>
              Selamat datang,{' '}
              {user.result.jenisKelamin == 'pria' ? 'Pak' : 'Bu'}{' '}
              {user.result.namaDepan} {user.result.namaBelakang}
            </Typography>
            <div className={classes.time}>
              <CalendarMonthIcon fontSize="20px" style={{ fontSize: '20px' }} />
              <Typography variant="body1">Selasa, 7 Juni 2022</Typography>
            </div>
          </div>
          {/* Banner */}
          <Typography
            variant="h6"
            style={{
              marginBottom: '14px',
              textAlign: 'center',
              fontSize: '32px'
            }}
          >
            {communityDetails.community_name}
          </Typography>
          <div
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '13px'
            }}
          >
            <img
              src={contoh_foto}
              alt=""
              style={{
                width: '100%',
                // backgroundSize: 'contain',
                maxHeight: '477px',
                borderRadius: '13px',
                objectFit: 'cover',
                backgroundAttachment: 'fixed',
                backgroundPosition: 'center center'
              }}
            />
          </div>
          {/* // kegiatan */}
          <div style={{ marginTop: '14px' }}>
            <Typography
              variant="h6"
              style={{ color: '#9D9D9D', marginBottom: '14px' }}
            >
              Kegiatan {communityDetails.community_name}
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={12} md={12}>
                {!activities.length ? (
                  // <CircularProgress />
                  <div>belum punya kegiatan</div>
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
