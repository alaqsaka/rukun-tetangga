/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import {
  Typography,
  Alert,
  Link,
  Grid,
  Modal,
  Box,
  Button,
  TextField
} from '@mui/material';
import axios from 'axios';
import Input from '../../components/atoms/Input/Input';
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import FileBase from 'react-file-base64';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import * as Yup from 'yup';
import ButtonSubmit from '../../components/atoms/Button copy';
import contoh_foto from '../../assets/images/banner-foto.jpg';
import useStyles from './styles';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  backgroundColor: '#F5F5F5'
};

const LandingPageCMS = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const classes = useStyles();
  const [communityDetails, setCommunityDetails] = useState({});
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

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
        });
    }
  }, []);

  if (!user) {
    return <div>Login terlebih dahulu untuk mengakses halaman ini </div>;
  }

  const INITIAL_FORM_STATE = {
    community_name: communityDetails.community_name,
    community_address: '',
    community_banner: ''
  };

  const [formData, setFormData] = useState(INITIAL_FORM_STATE);

  const FORM_VALIDATION = Yup.object().shape({
    community_name: Yup.string(),
    community_address: Yup.string(),
    community_banner: Yup.string()
  });

  const handleSubmit = (values) => {
    console.log(values);
    console.log(formData);
  };

  const handleChange = (e) => {
    console.log('handlechange');
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // console.log(formData);
  };

  console.log('ini community ', communityDetails);
  const formik = useFormik({
    initialValues: {
      community_name: communityDetails.community_name,
      community_address: '',
      community_banner: ''
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <div>
      {user.result.role === 'ketua' ? (
        <>
          <Alert severity="info" style={{ marginBottom: '20px' }}>
            <Typography variant="body1">
              Halaman ini masih dalam tahap pengembangan. Saran dan masukan Anda
              sangat bermaanfat untuk pengembangan halaman ini kedepannya
            </Typography>
            <Link href="mailto:engineer@rukuntetangga.com">
              Berikan saran sekarang
            </Link>
          </Alert>
          <Typography variant="h5">
            Landing Page Content Management System
          </Typography>
          <Typography
            variant="h6"
            style={{ color: '#9D9D9D', marginBottom: '14px' }}
          >
            Landing Page Content Management System adalah halaman yang digunakan
            untuk menyunting konten-konten yang ada pada landing page
          </Typography>

          {communityDetails && (
            <form onSubmit={formik.handleSubmit}>
              <Typography variant="h6" style={{ marginTop: '10px' }}>
                Nama RT / RW
              </Typography>
              <Typography variant="body1" style={{ marginBottom: '10px' }}>
                Contoh pengisian: RT 1 Parangtritis
              </Typography>
              <TextField
                id="community_name"
                name="community_name"
                type="text"
                onChange={formik.handleChange}
                fullWidth
                label={
                  formik.values.community_name
                    ? ''
                    : communityDetails.community_name
                }
                value={formik.values.community_name}
              />
              <Typography variant="h6" style={{ marginTop: '10px' }}>
                Alamat Lengkap RT/RW Anda
              </Typography>
              <Typography variant="body1" style={{ marginBottom: '10px' }}>
                Contoh pengisian: RT 1 Parangtritis, Vila Dago Tol, Tangerang
                Selatan, Banten, Indonesia
              </Typography>
              <TextField
                id="community_address"
                name="community_address"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.community_address}
                fullWidth
                label={
                  formik.values.community_address
                    ? ''
                    : communityDetails.community_address
                }
              />
              <Typography variant="h6" style={{ marginTop: '10px' }}>
                Banner foto komunitas anda
              </Typography>
              <Typography variant="body1" style={{ marginBottom: '10px' }}>
                Upload gambar yang meliputi RT / RW anda yaa
              </Typography>
              <FileBase type="file" multiple={false} />
              <Grid
                container
                alignContent="center"
                spacing={2}
                style={{ marginTop: '20px' }}
              >
                <Grid item xs={2}>
                  <Button variant="contained" type="submit" fullWidth>
                    Update data
                  </Button>
                </Grid>
                <Grid item xs={2}>
                  <Button variant="outlined" onClick={handleOpen}>
                    Preview landing page
                  </Button>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <div
                        style={{
                          justifyContent: 'space-between',
                          display: 'flex'
                        }}
                      >
                        <Typography variant="h5" style={{ color: '#9D9D9D' }}>
                          Selamat datang,{' '}
                          {user.result.jenisKelamin == 'pria' ? 'Pak' : 'Bu'}{' '}
                          {user.result.namaDepan} {user.result.namaBelakang}
                        </Typography>
                        <div className={classes.time}>
                          <CalendarMonthIcon
                            fontSize="20px"
                            style={{ fontSize: '20px' }}
                          />
                          <Typography variant="body1">
                            Selasa, 7 Juni 2022
                          </Typography>
                        </div>
                      </div>
                      <Typography
                        variant="h6"
                        style={{
                          marginBottom: '14px',
                          textAlign: 'center',
                          fontSize: '32px'
                        }}
                      >
                        {formik.values.community_name
                          ? formik.values.community_name
                          : communityDetails.community_name}
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
                    </Box>
                  </Modal>
                </Grid>
              </Grid>
            </form>
          )}

          {/* <Formik
            initialValues={{
              ...INITIAL_FORM_STATE
            }}
            validationSchema={FORM_VALIDATION}
            onSubmit={(values) => {
              handleSubmit(values);
            }}
          >
            <Form>
              <Typography variant="h6" style={{ marginTop: '10px' }}>
                Nama RT / RW
              </Typography>
              <Typography variant="body1" style={{ marginBottom: '10px' }}>
                Contoh pengisian: RT 1 Parangtritis
              </Typography>
              <Input
                name="community_name"
                label="Isi ini dengan nama singkat RT atau RW"
                handleChange={handleChange}
                xs={6}
                half
                value={formData.community_name}
              />
              <Typography variant="h6" style={{ marginTop: '10px' }}>
                Alamat Lengkap RT/RW Anda
              </Typography>
              <Typography variant="body1" style={{ marginBottom: '10px' }}>
                Contoh pengisian: RT 1 Parangtritis, Vila Dago Tol, Tangerang
                Selatan, Banten, Indonesia
              </Typography>
              <Input
                name="community_address"
                label="Isi ini dengan alamat lengkapmu ya"
                handleChange={handleChange}
                xs={6}
                half
              />
              <Typography variant="h6" style={{ marginTop: '10px' }}>
                Banner foto komunitas anda
              </Typography>
              <Typography variant="body1" style={{ marginBottom: '10px' }}>
                Upload gambar yang meliputi RT / RW anda yaa
              </Typography>
              <FileBase type="file" multiple={false} />
              <Grid
                container
                alignContent="center"
                spacing={2}
                style={{ marginTop: '20px' }}
              >
                <Grid item xs={2}>
                  <ButtonSubmit>Update data</ButtonSubmit>
                </Grid>
                <Grid item xs={2}>
                  <Button variant="outlined" onClick={handleOpen}>
                    Preview landing page
                  </Button>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <div
                        style={{
                          justifyContent: 'space-between',
                          display: 'flex'
                        }}
                      >
                        <Typography variant="h5" style={{ color: '#9D9D9D' }}>
                          Selamat datang,{' '}
                          {user.result.jenisKelamin == 'pria' ? 'Pak' : 'Bu'}{' '}
                          {user.result.namaDepan} {user.result.namaBelakang}
                        </Typography>
                        <div className={classes.time}>
                          <CalendarMonthIcon
                            fontSize="20px"
                            style={{ fontSize: '20px' }}
                          />
                          <Typography variant="body1">
                            Selasa, 7 Juni 2022
                          </Typography>
                        </div>
                      </div>
                      <Typography
                        variant="h6"
                        style={{
                          marginBottom: '14px',
                          textAlign: 'center',
                          fontSize: '32px'
                        }}
                      >
                        {formData.community_name}
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
                    </Box>
                  </Modal>
                </Grid>
              </Grid>
            </Form>
          </Formik> */}
        </>
      ) : (
        <div>Warga tidak dapat mengunjungi laman ini</div>
      )}
    </div>
  );
};

export default LandingPageCMS;
