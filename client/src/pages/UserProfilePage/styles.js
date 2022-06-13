/* eslint-disable no-unused-vars */
import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  nama: {
    '@media (max-width:600px)': {
      fontSize: '36px !important',
      marginBottom: '10px !important'
    }
  },
  fotoProfile: {
    '@media (max-width:600px)': {
      width: '50px !important',
      height: '50px !important'
    },
    height: '100px !important',
    width: '100px !important',
    fontSize: '50px !important'
  },
  userDetails: {
    // borderColor: 'none !important'
    // // boxShadow: 'none !important'
    marginTop: '10px'
  }
}));
