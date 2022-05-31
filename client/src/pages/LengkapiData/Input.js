/* eslint-disable no-unused-vars */
import React from 'react';
import { TextField, Grid, InputAdornment, IconButton } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useField } from 'formik';

const Input = ({
  half,
  name,
  label,
  autoFocus,
  type,
  handleChange,
  handleShowPassword,
  value
}) => {
  const [field, mata] = useField(name);
  const configTextField = {
    ...field
  };

  if (mata && mata.touched && mata.error) {
    configTextField.error = true;
    configTextField.helperText = mata.error;
  }

  return (
    <Grid item md={12}>
      <TextField
        name={name}
        onChange={handleChange}
        variant="outlined"
        required
        fullWidth
        label={label}
        autoFocus={autoFocus}
        type={type}
        {...configTextField}
        value={value}
        InputProps={
          (name === 'password' && {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleShowPassword}>
                  {type === 'password' ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            )
          }) ||
          (name === 'confirmPassword' && {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleShowPassword}>
                  {type === 'password' ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            )
          })
        }
      />
    </Grid>
  );
};

export default Input;
