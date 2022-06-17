/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Avatar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button
} from '@mui/material';
import axios from 'axios';
import { fontSize } from '@mui/system';
import useStyles from './styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import moment from 'moment';

const UserProfilePage = () => {
  const classes = useStyles();
  // check if user logged in or no
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const [communityDetails, setCommunityDetails] = useState({});
  useEffect(() => {
    //const token = user?.token;
    setUser(JSON.parse(localStorage.getItem('profile')));

    if (user) {
      axios
        .get(
          `http://rukuntetangga-admin.my.id/community/${user.result.community_id}`
        )
        .then((response) => {
          setCommunityDetails(response.data.data);
          console.log(communityDetails);
        });
    }
  }, []);

  if (!user) {
    return (
      <div>
        <Typography variant="h6">
          Harus login terlebih dahulu untuk mengakses halaman ini
        </Typography>
      </div>
    );
  }

  return (
    <div>
      <div
        style={{ textAlign: 'center', marginTop: '50px', marginBottom: '50px' }}
      >
        <Typography variant="h3" className={classes.nama}>
          {user.result.namaDepan} {user.result.namaBelakang}
        </Typography>
        <Avatar
          style={{ alignSelf: 'center', margin: '0 auto', marginTop: '20px' }}
          className={classes.fotoProfile}
        >
          {' '}
          {user.result.namaDepan.charAt(0)}
        </Avatar>
      </div>
      {/* User Details */}
      <Accordion className={classes.userDetails}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className={classes.userDetails}
          //   style={{}}
        >
          <Typography>User Detail</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="caption">Nama Lengkap</Typography>
          <Typography variant="body1">
            {user.result.namaDepan} {user.result.namaBelakang}
          </Typography>

          <Typography variant="caption">Alamat</Typography>
          <Typography variant="body1">{user.result.alamat}</Typography>

          <Typography variant="caption">Nomor Telepon</Typography>
          <Typography variant="body1">{user.result.phone}</Typography>

          <Typography variant="caption">Jenis Kelamin</Typography>
          <Typography variant="body1">{user.result.jenisKelamin}</Typography>

          <Typography variant="caption">Akun Dibuat Pada</Typography>
          <Typography variant="body1">
            {moment(user.result.createdAt).format(
              'dddd, MMMM Do YYYY, h:mm:ss a'
            )}
          </Typography>

          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: '20px' }}
          >
            Edit Profile
          </Button>
        </AccordionDetails>
      </Accordion>

      {/* Community Details */}
      <Accordion className={classes.userDetails}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className={classes.userDetails}
          //   style={{}}
        >
          <Typography>Community Detail</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="caption">Nama RT / RW</Typography>
          <Typography variant="body1">
            {communityDetails.community_name}
          </Typography>

          <Typography variant="caption">Alamat Lengkap RT / RW</Typography>
          <Typography variant="body1">
            {communityDetails.community_address}
          </Typography>

          <Typography variant="caption">Role Anda</Typography>
          <Typography variant="body1">{user.result.role}</Typography>

          <Typography variant="caption">
            Kode RT / RW (Bagikan kode ini kepada warga untuk join ke Rukun
            Tetangga)
          </Typography>
          <Typography variant="body1">
            {communityDetails.community_id}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default UserProfilePage;
