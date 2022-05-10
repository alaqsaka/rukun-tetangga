/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@mui/material';
import useStyles from './styles';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { createActivity } from '../../../actions/activities.js';

const Form = () => {
  const dispatch = useDispatch();

  const [activityData, setActivityData] = useState({
    creator: '',
    namaKegiatan: '',
    deskripsiKegiatan: '',
    tanggalKegiatan: '',
    waktuKegiatan: '',
    tempatKegiatan: '',
    selectedFile: ''
  });

  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(activityData.selectedFile);
    dispatch(createActivity(activityData));
  };

  const clear = () => {};
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Buat Kegiatan Baru</Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={activityData.creator}
          onChange={(e) =>
            setActivityData({ ...activityData, creator: e.target.value })
          }
        />
        <TextField
          name="namaKegiatan"
          variant="outlined"
          label="Nama Kegiatan"
          fullWidth
          value={activityData.namaKegiatan}
          onChange={(e) =>
            setActivityData({ ...activityData, namaKegiatan: e.target.value })
          }
        />
        <TextField
          name="deskripsiKegiatan"
          variant="outlined"
          label="Deskripsi Kegiatan"
          fullWidth
          value={activityData.deskripsiKegiatan}
          onChange={(e) =>
            setActivityData({
              ...activityData,
              deskripsiKegiatan: e.target.value
            })
          }
        />
        <TextField
          name="tanggalKegiatan"
          variant="outlined"
          label="Tanggal Kegiatan"
          fullWidth
          value={activityData.tanggalKegiatan}
          onChange={(e) =>
            setActivityData({
              ...activityData,
              tanggalKegiatan: e.target.value
            })
          }
        />
        <TextField
          name="waktuKegiatan"
          variant="outlined"
          label="Waktu Kegiatan"
          fullWidth
          value={activityData.waktuKegiatan}
          onChange={(e) =>
            setActivityData({ ...activityData, waktuKegiatan: e.target.value })
          }
        />
        <TextField
          name="tempatKegiatan"
          variant="outlined"
          label="Tempat Kegiatan"
          fullWidth
          value={activityData.tempatKegiatan}
          onChange={(e) =>
            setActivityData({ ...activityData, tempatKegiatan: e.target.value })
          }
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={(base64) =>
              setActivityData({
                ...activityData,
                selectedFile: JSON.stringify(base64)
              })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          size="large"
          fullWidth
          type="submit"
        >
          Buat Kegiatan
        </Button>
        <Button
          variant="text"
          color="inherit"
          size="small"
          fullWidth
          onClick={clear}
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
