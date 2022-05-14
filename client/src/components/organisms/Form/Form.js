/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper, Stack } from '@mui/material';
import useStyles from './styles';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { createActivity, updateActivity } from '../../../actions/activities.js';

// Mendapatkan ID kegiatan, dengan cara menekan icon MoreHoriz pada card kegiatan

const Form = ({ currentId, setCurrentId }) => {
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

  const [tanggal, setTanggal] = useState('');
  console.log(tanggal);

  // mendapatkan data untuk kegiatan yang sedang diupdate, supaya data tersebut dapat ditampilkan pada form
  const activity = useSelector((state) =>
    currentId ? state.activities.find((a) => a._id === currentId) : null
  );

  const classes = useStyles();

  useEffect(() => {
    if (activity) setActivityData(activity);
  }, [activity]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // jika ada currentId
    if (currentId) {
      // men-dispatch function untuk update activity (kegiatan)
      dispatch(updateActivity(currentId, activityData));
    } else {
      dispatch(createActivity(activityData));
    }
    clear();
  };

  const clear = () => {
    // fungsi untuk mengosongkon field input yang ada di form
    // semua field akan kosong saat button BUAT KEGIATAN ditekan
    // atau CLEAR ditekan
    setCurrentId(null);
    setActivityData({
      creator: '',
      namaKegiatan: '',
      deskripsiKegiatan: '',
      tanggalKegiatan: '',
      waktuKegiatan: '',
      tempatKegiatan: '',
      selectedFile: ''
    });
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? 'Mengedit Kegiatan' : 'Membuat Kegiatan'}
        </Typography>
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
        {/* <TextField
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
        /> */}
        <TextField
          id="date"
          label="Tanggal Kegiatan"
          type="date"
          defaultValue="2022-05-22"
          fullWidth
          name="tanggalKegiatan"
          InputLabelProps={{
            shrink: true
          }}
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
