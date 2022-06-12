/* eslint-disable no-unused-vars */
import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
    border: '2px solid #000'
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1)
    }
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  googleButton: {
    marginBottom: theme.spacing(2)
  },
  time: {
    background: '#fff',
    width: 'fit-content',
    padding: '12px',
    borderRadius: '13px',
    color: '#9D9D9D',
    fontSize: '20px',
    display: 'flex'
  }
}));
