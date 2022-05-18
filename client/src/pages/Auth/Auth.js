/* eslint-disable no-unused-vars */
import React from 'react';
import {
  Avatar,
  Paper,
  Grid,
  Typography,
  Container,
  TextField,
  RadioGroup,
  Radio,
  FormLabel,
  FormControlLabel,
  InputLabel,
  MenuItem,
  FormControl
} from '@mui/material';
import useStyles from './styles';
import { Formik, Form } from 'formik';
import Input from './Input';
import * as Yup from 'yup';
import Select from './Select';
import genders from '../../data/genders.json';
import roles from '../../data/roles.json';
import Button from './Button';

const Auth = () => {
  const INITIAL_FORM_STATE = {
    namaDepan: '',
    namaBelakang: '',
    phone: '',
    alamat: '',
    jenisKelamin: '',
    password: '',
    confirmPassword: '',
    role: ''
  };

  const FORM_VALIDATION = Yup.object().shape({
    namaDepan: Yup.string().required('Nama depan tidak boleh kosong'),
    namaBelakang: Yup.string().required('Nama belakang tidak boleh kosong'),
    phone: Yup.number()
      .integer()
      .typeError('Masukkan nomor handphone yang sesuai')
      .required('Nomor handphone tidak boleh kosong'),
    alamat: Yup.string().required('Alamat tidak boleh kosong'),
    jenisKelamin: Yup.string().required('Jenis kelamin tidak boleh kosong'),
    password: Yup.string().required('Kata sandi tidak boleh kosong'),
    confirmPassword: Yup.string().required('Konfirmasi Password'),
    role: Yup.string().required('Apakah anda warga atau ketua?')
  });

  const classes = useStyles();

  const isSignup = true;

  const handleSubmit = () => {};

  const handleChange = () => {};

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Typography variant="h5" style={{ textAlign: 'center' }}>
          Selamat Datang
        </Typography>
        <Typography
          variant="body2"
          style={{ textAlign: 'center', marginBottom: '20px' }}
        >
          Masukkan kredensial Anda untuk mengakses akun Anda
        </Typography>
        <Typography variant="h6">{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
        <Formik
          initialValues={{
            ...INITIAL_FORM_STATE
          }}
          validationSchema={FORM_VALIDATION}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <Form>
            <Grid container spacing={2}>
              {isSignup && (
                <>
                  <Input
                    name="namaDepan"
                    label="Nama Depan"
                    handleChange={handleChange}
                    xs={6}
                    half
                  />
                  <Input
                    name="namaBelakang"
                    label="Nama Belakang"
                    handleChange={handleChange}
                    xs={6}
                    half
                  />
                  <Input
                    name="phone"
                    label="Nomor Telepon"
                    handleChange={handleChange}
                    xs={6}
                  />
                  <Input
                    name="alamat"
                    label="Alamat Rumah"
                    handleChange={handleChange}
                    xs={6}
                  />

                  <Grid item xs={12}>
                    <Select
                      name="jenisKelamin"
                      label="Jenis Kelamin"
                      options={genders}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Select
                      name="role"
                      label="Peran anda di RT"
                      options={roles}
                    />
                  </Grid>

                  <Input
                    name="password"
                    label="Kata Sandi"
                    type="password"
                    handleChange={handleChange}
                    xs={6}
                  />

                  <Input
                    name="confirmPassword"
                    label="Konfirmasi Kata Sandi"
                    handleChange={handleChange}
                    type="password"
                    xs={6}
                  />

                  <Grid item xs={12}>
                    <Button>Buat akun baru</Button>
                  </Grid>

                  {/* <FormControl
                    fullWidth
                    style={{ paddingLeft: '16px', paddingRight: '16px' }}
                  >
                    <InputLabel
                      id="demo-simple-select-label"
                      style={{ paddingLeft: '16px', paddingRight: '16px' }}
                    >
                      Apakah Anda warga atau ketua?
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={INITIAL_FORM_STATE.role}
                      label="Apakah Anda warga atau ketua?"
                      onChange={handleChange}
                    >
                      <MenuItem value="warga">Warga</MenuItem>
                      <MenuItem value="ketua">Ketua</MenuItem>
                    </Select>
                  </FormControl> */}
                </>
              )}
            </Grid>
          </Form>
        </Formik>
      </Paper>
    </Container>
  );
};

export default Auth;
