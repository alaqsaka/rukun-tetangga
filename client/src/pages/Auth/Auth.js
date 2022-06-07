/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
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
import { useDispatch } from 'react-redux';
import { signin, signup } from '../../actions/auth';
import { useHistory } from 'react-router-dom';

const Auth = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const history = useHistory();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  if (user) {
    history.push('/');
  }

  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);

  const handleShowConfirmPassword = () =>
    setShowConfirmPassword(
      (prevShowConfirmPassword) => !prevShowConfirmPassword
    );

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

  const INITIAL_FORM_STATE_SIGNUP = {
    namaDepan: '',
    namaBelakang: '',
    phone: '',
    alamat: '',
    jenisKelamin: '',
    password: '',
    confirmPassword: '',
    role: ''
  };

  const [formData, setFormData] = useState(INITIAL_FORM_STATE);

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

  const FORM_VALIDATION_SIGNIN = Yup.object().shape({
    phone: Yup.number()
      .integer()
      .typeError('Masukkan nomor handphone yang sesuai')
      .required('Nomor handphone tidak boleh kosong'),
    password: Yup.string().required('Kata sandi tidak boleh kosong')
  });

  const classes = useStyles();

  const handleSubmit = (values) => {
    console.log('submit');
    console.log(formData);
    dispatch(signup(values, history));
  };

  const handleSubmitSignIn = (values) => {
    dispatch(signin(values, history));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const [isSignup, setIsSignup] = useState(false);

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword((prevShowPassword) => !prevShowPassword);
    setShowConfirmPassword(
      (prevShowConfirmPassword) => !prevShowConfirmPassword
    );
  };

  const handleReset = () => {
    // if (!window.confirm('Reset?')) {
    //   throw new Error('Cancel reset');
    // }
  };

  let initalFormValues = {};

  if (isSignup) {
    initalFormValues = { ...INITIAL_FORM_STATE };
  } else {
    initalFormValues = { ...INITIAL_FORM_STATE_SIGNUP };
  }

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
            ...initalFormValues
          }}
          validationSchema={isSignup ? FORM_VALIDATION : FORM_VALIDATION_SIGNIN}
          onSubmit={(values) => {
            if (isSignup) {
              // signup
              console.log(values);
              // dispatch(signup(values, history));
              handleSubmit(values);
            } else {
              // signin
              console.log(values);
              // dispatch(signin(values, history));
              handleSubmitSignIn(values);
            }
          }}
          onReset={handleReset}
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
                </>
              )}
              <Input
                name="phone"
                label="Nomor Telepon"
                handleChange={handleChange}
                xs={6}
              />
              {isSignup && (
                <>
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
                </>
              )}
              <Input
                name="password"
                label="Kata Sandi"
                type={showPassword ? 'text' : 'password'}
                handleShowPassword={handleShowPassword}
                handleChange={handleChange}
                xs={6}
              />
              {isSignup && (
                <>
                  <Input
                    name="confirmPassword"
                    label="Konfirmasi Kata Sandi"
                    handleChange={handleChange}
                    type={showConfirmPassword ? 'text' : 'password'}
                    handleShowPassword={handleShowConfirmPassword}
                    xs={6}
                  />
                </>
              )}
              <Grid item xs={12}>
                <Button>{isSignup ? 'Buat akun baru' : 'Masuk'}</Button>
              </Grid>
            </Grid>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Button onClick={switchMode} variant="text" type="reset">
                  {isSignup
                    ? 'Sudah punya akun? Masuk'
                    : 'Belum punya akun? Daftar'}
                </Button>
              </Grid>
            </Grid>
          </Form>
        </Formik>
      </Paper>
    </Container>
  );
};

export default Auth;
