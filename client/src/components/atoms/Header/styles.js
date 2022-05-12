import { makeStyles } from '@mui/styles';

const styles = () => {
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
    }
  };
};

const useStyles = makeStyles(styles);
export default useStyles;
