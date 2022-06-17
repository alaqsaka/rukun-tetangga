/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
  Card,
  CardActions,
  CardMedia,
  Button,
  Typography,
  CardContent,
  ButtonBase
} from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import useStyles from './styles';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { deleteActivity, likeActivity } from '../../../../actions/activities';
import contoh_foto from '../../../../assets/images/group_of_friends.jpg';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Activity = ({ activity, setCurrentId, activities }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  // console.log('activity abis post', activity);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const openPost = () => history.push(`/kegiatan/${activity.id}`);
  console.log('user ', user.accessToken);

  console.log('activities activity.js', activities);

  const [newActivities, setnewActivities] = useState([]);

  const likeAPost = (postId) => {
    axios
      .post(
        'http://rukuntetangga-admin.my.id/likes',
        { PostId: postId },
        {
          headers: {
            accessToken: user.accessToken
          }
        }
      )
      .then((response) => {
        // alert(response.data.liked);
        // console.log('activities act.js', activities);
        setnewActivities(
          activities.map((post) => {
            console.log(post);
            if (post.id === postId) {
              if (response.data.liked) {
                console.log('here');
                return { ...post, Likes: [...post.Likes, 0] };
              } else {
                const likesArray = post.Likes;
                likesArray.pop();
                console.log('here2');
                return { ...post, Likes: likesArray };
              }
            } else {
              console.log('here3');
              return post;
            }
          })
        );
      });

    console.log('new activities', newActivities);
  };

  //let image = JSON.parse(activity.selectedFile[0]);

  // fungsi untuk mengubah waktu (harinya) dari bahasa inggris ke bahasa indo
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={contoh_foto}
        title={activity.namaKegiatan}
        onClick={openPost}
      />

      <div className={classes.overlay}>
        <Typography variant="h6">{activity.creator}</Typography>
        <Typography variant="body2">
          {moment(activity.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        {/* Button untuk update kegiatan */}
        {/* Wont show edit button if logged in as warga */}
        {user.result.role === 'ketua' && (
          <Button
            style={{ color: 'white' }}
            size="small"
            onClick={() => setCurrentId(activity.id)}
          >
            <MoreHorizIcon fontSize="medium" />
          </Button>
        )}
      </div>
      <div className={classes.details}>
        <Typography variant="h5" gutterBottom>
          {activity.namaKegiatan}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Deskripsi: {activity.deskripsiKegiatan}
        </Typography>
      </div>
      <CardActions className={classes.cardActions}>
        {/* <Button
          size="small"
          color="primary"
          onClick={() => likeAPost(activity.id)}
        >
          <ThumbUpAltIcon fontSize="small" />
          &nbsp; Suka &nbsp; {activity.Likes.length}
        </Button> */}
        {/* Wont show delete button if logged in as warga */}
        {user.result.role == 'ketua' && (
          <Button
            size="small"
            color="primary"
            onClick={() => dispatch(deleteActivity(activity.id))}
          >
            <DeleteIcon fontSize="small" />
            Hapus
          </Button>
        )}
      </CardActions>
      <CardContent>
        <Typography variant="body2" gutterBottom>
          📅 {moment(activity.tanggalKegiatan).format('dddd, LL')}
        </Typography>
        <Typography variant="body2" gutterBottom>
          🕕 {activity.waktuKegiatan}
        </Typography>
        <Typography variant="body2" gutterBottom>
          📌 {activity.tempatKegiatan}
        </Typography>
        {/* <Typography variant="body2" gutterBottom style={{ marginTop: '15px' }}>
          Warga yang akan hadir pada kegiatan ini:
        </Typography>
        <Typography variant="body2" gutterBottom> */}
        {/* nampilin list warga-warga yang hadir */}
        {/* {activity.hadirCount}
        </Typography> */}
      </CardContent>

      {/* <div style={{ padding: '10px' }}>
        <Button
          color="primary"
          variant="contained"
          fullWidth
          style={{ borderRadius: '13px', background: '#0094FF' }}
        > */}
      {/* logic untuk nambahin hadir count && nambahin profile picture warga / nama warga */}
      {/* kalau udah pencet tombol hadir, tulisannya berubah jadi Saya Akan Hadir */}
      {/* Hadir
        </Button>
      </div> */}
    </Card>
  );
};

export default Activity;
