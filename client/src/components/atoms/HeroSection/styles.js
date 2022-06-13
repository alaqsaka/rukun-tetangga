import { makeStyles } from '@mui/styles';

const styles = () => {
  return {
    heroBox: {
      width: '100%',
      display: 'flex',
      minHeight: '600px',
      alignItems: 'center',
      justifyContent: 'center'
    },
    gridContainer: {
      display: 'flex',
      alignItems: 'center',
      maxWidth: '1300px',
      padding: '20px'
    },
    aboutUsContainer: {
      width: '100%',
      display: 'flex',
      minHeight: '400px',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '30px 0px 50px 0px'
    },
    aboutUsSubtitle: {
      opacity: '0.7',
      paddingBottom: '30px',
      fontSize: '18px'
    },
    title: {
      paddingBottom: '15px',
      background:
        'linear-gradient(178.9deg, #0094FF 76.77%, rgba(0, 122, 255, 0.510417) 131.28%, rgba(0, 122, 255, 0) 120.06%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      textAlign: 'center'

      //       background: linear-gradient(178.9deg, #0094FF 76.77%, rgba(0, 122, 255, 0.510417) 131.28%, rgba(0, 122, 255, 0) 220.06%);
      // -webkit-background-clip: text;
      // -webkit-text-fill-color: transparent;
      // background-clip: text;
      // text-fill-color: transparent;
    },
    subtitle: {
      opacity: '0.4',
      paddingBottom: '30px',
      textAlign: 'center'
    },
    largeImage: {
      width: '100%'
    }
  };
};

const useStyles = makeStyles(styles);
export default useStyles;
