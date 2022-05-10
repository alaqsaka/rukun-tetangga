/* eslint-disable no-unused-vars */
import React from 'react';
import {
  Card,
  CardActions,
  CardMedia,
  Button,
  Typography,
  CardContent
} from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import useStyles from './styles';
import moment from 'moment';
import Delete from '@mui/icons-material/Delete';

const Activity = ({ activity }) => {
  const classes = useStyles();

  let image = JSON.parse(activity.selectedFile[0]);

  console.log(image['base64']);
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={image['base64']}
        title={activity.namaKegiatan}
      />

      <div className={classes.overlay}>
        <Typography variant="h6">{activity.creator}</Typography>
        <Typography variant="body2">
          {moment(activity.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: 'white' }} size="small" onClick={() => {}}>
          <MoreHorizIcon fontSize="default" />
        </Button>
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
        <Button size="small" color="primary" onClick={() => {}}>
          <ThumbUpAltIcon fontSize="small" />
          Suka
        </Button>
        <Button size="small" color="primary" onClick={() => {}}>
          <Delete fontSize="small" />
          Hapus
        </Button>
      </CardActions>
      <CardContent>
        <Typography variant="body2" gutterBottom>
          📅 {activity.tanggalKegiatan}
        </Typography>
        <Typography variant="body2" gutterBottom>
          🕕 {activity.waktuKegiatan}
        </Typography>
        <Typography variant="body2" gutterBottom>
          📌 {activity.tempatKegiatan}
        </Typography>
      </CardContent>

      <div style={{ padding: '10px' }}>
        <Button color="primary" variant="contained" fullWidth>
          Saya akan hadir
        </Button>
      </div>
    </Card>
  );
};

export default Activity;
