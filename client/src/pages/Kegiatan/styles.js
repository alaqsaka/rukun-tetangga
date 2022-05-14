import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  [theme.breakpoints.down('sm')]: {
    mainContainer: {
      display: 'flex !important',
      flexDirection: 'column-reverse !important'
    }
  }
}));
