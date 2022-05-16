import { makeStyles } from '@mui/styles';
import { deepPurple } from '@mui/material/colors';

const styles = (theme) => {
  return {
    toolBar: {
      height: '10vh',
      display: 'flex',
      justifyContent: 'space-between',
      padding: '20px',
      backgroundColor: 'white'
    },
    logo: {
      color: 'blue',
      cursor: 'pointer',
      fontSize: '24px',
      background:
        '-webkit-linear-gradient(178.9deg, #0094FF 76.77%, rgba(0, 122, 255, 0.510417) 131.28%, rgba(0, 122, 255, 0) 220.06%);',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      fontWeight: '700'
    },
    link: {
      color: '#000',
      fontSize: '16px'
    },
    menuIcon: {
      color: '#000'
    },
    image: {
      marginLeft: '15px'
    },
    toolbar: {
      display: 'flex',
      justifyContent: 'flex-end',
      width: '400px'
    },
    profile: {
      display: 'flex',
      justifyContent: 'flex-end',
      width: '400px',
      [theme.breakpoints.down('md')]: {
        width: '100%',
        justifyContent: 'start'
      }
    },
    userName: {
      display: 'flex',
      // alignItems: 'center',
      color: 'red'
    },
    brandContainer: {
      display: 'flex',
      alignItems: 'center'
    },
    purple: {
      color: theme.palette.getContrastText(deepPurple[500]),
      backgroundColor: deepPurple[500]
    },
    logout: {
      marginLeft: '20px !important'
    }
  };
};

const useStyles = makeStyles(styles);
export default useStyles;
