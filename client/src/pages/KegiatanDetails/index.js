/* eslint-disable no-unused-vars */
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
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  console.log(user);

  if (!user) {
    return <div>Login terlebih dahulu untuk mengakses halaman ini</div>;
  }

  //const comments = useSelector((state) => state.activities);
  let [comments, setComments] = useState([]);
  comments = useSelector((state) => state.activities);
  useEffect(() => {
    axios
      .get(`http://rukuntetangga-admin.my.id/posts/byId/${id}`)
      .then((response) => {
        setPostObject(response.data);
        console.log(response);
      });

    dispatch(getComments(id));
  }, []);

  // new comment
  const [newComment, setnewComment] = useState('');
  const addComment = () => {
    axios
      .post(
        'http://rukuntetangga-admin.my.id/comments',
        {
          commentBody: newComment,
          PostId: id,
          namaDepan: 'Warga',
          namaBelakang: 'Warga'
        },
        {
          headers: {
            accessToken: user.accessToken
          }
        }
      )
      .then((response) => {
        console.log('Comment added');
        let commentToAdd = {
          commentBody: newComment,
          PostId: id,
          namaDepan: 'Warga',
          namaBelakang: 'Warga'
        };
        setComments([...comments, commentToAdd]);

        setnewComment('');
        dispatch(getComments(id));
      });
  };

  return (
    <Paper style={{ padding: '20px', borderRadius: '15px' }} elevation={6}>
      {postObject != null ? (
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
                      onChange={(event) => {
                        setnewComment(event.target.value);
                      }}
                      value={newComment}
                    />
                  </Grid>
                  <Grid item lg={1} xs={12}>
                    <button onClick={addComment}>Kirim</button>
                  </Grid>
                </Grid>
                {comments?.map((comment) => (
                  <div key={comment.id}>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between'
                      }}
                    >
                      <Typography variant="body1" style={{ fontWeight: '500' }}>
                        {comment.namaDepan} {comment.namaBelakang}
                      </Typography>
                      <Typography
                        variant="caption"
                        style={{ fontWeight: '200' }}
                      >
                        {moment(comment.createdAt).fromNow()}
                      </Typography>
                    </div>
                    <Typography variant="body2">
                      {comment.commentBody}
                    </Typography>
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
      ) : (
        <div>Kegiatan ini tidak tersedia</div>
      )}
    </Paper>
  );
};

export default KegiatanDetails;
