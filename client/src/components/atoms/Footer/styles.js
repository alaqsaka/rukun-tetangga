import { makeStyles } from '@mui/styles';

const styles = () => {
  return {
    footerContainer: {
      display: 'flex',
      alignItems: 'center',
      miHeight: '10vh',
      padding: '20px',
      justifyContent: 'center',
      backgroundColor: '#f5f5f5',
      flexDirection: 'column'
    },
    footerText: {
      paddingBottom: '10px'
    },
    footerDate: {
      opacity: '0.4'
    },
    testimonialCard: {
      backgroundColor: '#fff',
      padding: '10px',
      minHeight: '200px',
      display: 'flex',
      alignItems: 'center'
    },
    testimonialStatement: {
      paddingBottom: '25px'
    },
    avatar: {
      marginRight: '10px'
    },
    testimonialPosition: {
      fontSize: '14px',
      opacity: '0.6'
    }
  };
};

const useStyles = makeStyles(styles);
export default useStyles;
