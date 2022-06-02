import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Paper, Typography, Divider, Grid, TextField } from '@mui/material';
import useStyles from './styles';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { getComments } from '../../actions/activities';

const KegiatanDetails = () => {
  let { id } = useParams();
  const classes = useStyles();
  const [postObject, setPostObject] = useState({});
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.activities);

  console.log(comments);

  useEffect(() => {
    axios.get(`http://localhost:3001/posts/byId/${id}`).then((response) => {
      setPostObject(response.data);
      console.log(response);
    });

    dispatch(getComments(id));
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
                Dibuat oleh: {postObject.creator}
              </Typography>
              <Typography variant="body1">
                {moment(postObject.createdAt).fromNow()}
              </Typography>
              <Divider style={{ margin: '20px 0' }} />
              <Typography variant="body1">
                <strong>Komentar</strong>
              </Typography>
              <Grid container spacing={1} style={{ marginBottom: '20px' }}>
                <Grid item lg={11} xs={12}>
                  <TextField
                    id="standard-basic"
                    label="Tambah Komentar"
                    variant="standard"
                    fullWidth
                  />
                </Grid>
                <Grid item lg={1} xs={12}>
                  <button>Kirim</button>
                </Grid>
              </Grid>
              {comments?.map((comment) => (
                <div key={comment.id}>
                  <div
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <Typography variant="body1" style={{ fontWeight: '500' }}>
                      {comment.namaDepan} {comment.namaBelakang}
                    </Typography>
                    <Typography variant="caption" style={{ fontWeight: '200' }}>
                      {moment(comment.createdAt).fromNow()}
                    </Typography>
                  </div>
                  <Typography variant="body2">{comment.commentBody}</Typography>
                </div>
              ))}
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
