/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
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
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import Input from './Input';
import { Formik, Form } from 'formik';
import Button from './Button';
import { lengkapi_data_ketua, lengkapi_data_warga } from '../../actions/auth';

const LengkapiData = () => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();

  if (user.result.community_id != '') {
    history.push('/');
  }

  useEffect(() => {
    //const token = user?.token;

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  const INITIAL_FORM_STATE_KETUA = {
    community_address: '',
    community_id: makeid(4),
    community_name: '',
    KetuaId: user.result.id
  };

  const INITIAL_FORM_STATE_WARGA = {
    community_id: '',
    id: user.result.id
  };

  const [formData, setFormData] = useState(INITIAL_FORM_STATE_KETUA);

  const FORM_VALIDATION_KETUA = Yup.object().shape({
    community_address: Yup.string().required('Alamat RT-mu tidak boleh kosong'),
    community_id: Yup.string().required('Auto generate ID'),
    community_name: Yup.string().required('Sebutan untuk RT-mu')
  });

  const FORM_VALIDATION_WARGA = Yup.object().shape({
    community_id: Yup.string().required('Auto generate ID')
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (values) => {
    console.log('submit');
    console.log(formData);
    console.log(values);
    //formData.community_id = makeid(4);
    dispatch(lengkapi_data_ketua(values, history));
    console.log('dispatch');
    //dispatch(signup(values, history));
  };

  const handleSubmitWarga = (values) => {
    //dispatch(signin(values, history));
    console.log('Warga submit');
    console.log(values);
    dispatch(lengkapi_data_warga(values, history));
  };

  const handleReset = () => {
    // if (!window.confirm('Reset?')) {
    //   throw new Error('Cancel reset');
    // }
  };

  let initalFormValues = {};

  if (user.result.role === 'ketua') {
    initalFormValues = { ...INITIAL_FORM_STATE_KETUA };
  } else {
    initalFormValues = { ...INITIAL_FORM_STATE_WARGA };
  }

  // generate community id
  function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  return (
    <Container component="main" maxWidth="md">
      <Paper className={classes.paper} elevation={3}>
        <Typography variant="h5" style={{ textAlign: 'center' }}>
          Lengkapi Datamu Terlebih Dahulu Yuk!
        </Typography>
        <Formik
          initialValues={{
            ...initalFormValues
          }}
          //   validationSchema={
          //     user.result.role === 'ketua'
          //       ? FORM_VALIDATION_KETUA
          //       : FORM_VALIDATION_WARGA
          //   }
          validator={() => ({})}
          onSubmit={(values) => {
            // if (user.result.role === 'ketua') {
            //   // signup
            //   console.log(values);
            //   // dispatch(signup(values, history));
            //   handleSubmit(values);
            // } else {
            //   // signin
            //   console.log(values);
            //   // dispatch(signin(values, history));
            //   handleSubmitWarga(values);
            // }
            if (user.result.role === 'ketua') {
              console.log('submit');
              handleSubmit(values);
            } else {
              handleSubmitWarga(values);
            }
          }}
          onReset={handleReset}
        >
          <Form>
            <Grid container spacing={2}>
              {user.result.role === 'ketua' ? (
                <>
                  <Input
                    name="community_address"
                    label="Alamat RT-mu"
                    handleChange={handleChange}
                  />
                  <Input
                    name="community_name"
                    label="Sebutan nama RT-mu"
                    handleChange={handleChange}
                  />
                  <Grid item md={12}>
                    <Typography variant="h6">
                      Kode {formData.community_id}
                    </Typography>
                  </Grid>

                  {/* <Input
                    name="community_id"
                    label="Id community"
                    handleChange={handleChange}
                    value={makeid(4)}
                  /> */}
                  <Grid item md={12}>
                    <Typography variant="h6">
                      Kode ini yang nantinya kamu bagikan kepada warga ya!
                    </Typography>
                  </Grid>
                </>
              ) : (
                <>
                  <Grid item md={12}>
                    <Typography variant="h6">
                      Masukkan kode yang diberikan oleh ketua RT-mu ya
                    </Typography>
                  </Grid>

                  <Input
                    name="community_id"
                    label="Id community"
                    handleChange={handleChange}
                  />
                </>
              )}
              <Grid item xs={12}>
                <Button variant="contained" fullWidth>
                  Lengkapi Data
                </Button>
              </Grid>
            </Grid>
          </Form>
        </Formik>
      </Paper>
    </Container>
  );
};

export default LengkapiData;
