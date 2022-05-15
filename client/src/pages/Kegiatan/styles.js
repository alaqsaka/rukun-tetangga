import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  [theme.breakpoints.down('md')]: {
    mainContainer: {
      display: 'flex !important',
      flexDirection: 'column-reverse !important'
    }
  }
}));
