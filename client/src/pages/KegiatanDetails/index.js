import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Paper, Typography, Divider, Grid } from '@mui/material';
import useStyles from './styles';
import moment from 'moment';

const KegiatanDetails = () => {
  let { id } = useParams();
  const classes = useStyles();
  const [postObject, setPostObject] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:3001/posts/byId/${id}`).then((response) => {
      setPostObject(response.data);
      console.log(response);
    });
  }, []);

  return (
    <Paper style={{ padding: '20px', borderRadius: '15px' }} elevation={6}>
      <div className={classes.card}>
        <Grid container spacing={1}>
          <Grid item xs={12} lg={6}>
            <div className={classes.section}>
              <Typography variant="h3" component="h2">
                {postObject.namaKegiatan}
              </Typography>
              <Typography gutterBottom variant="body1" component="p">
                {postObject.deskripsiKegiatan}
              </Typography>
              <Typography variant="h6">
                Created by: {postObject.creator}
              </Typography>
              <Typography variant="body1">
                {moment(postObject.createdAt).fromNow()}
              </Typography>
              <Divider style={{ margin: '20px 0' }} />
              <Typography variant="body1">
                <strong>Comments - coming soon!</strong>
              </Typography>
              <Divider style={{ margin: '20px 0' }} />
            </div>
          </Grid>
          <Grid item xs={12} lg={6}>
            <div className={classes.imageSection}>
              <img
                className={classes.media}
                src={
                  postObject.selectedFile ||
                  'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'
                }
                alt={postObject.title}
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </Paper>
  );
};

export default KegiatanDetails;
