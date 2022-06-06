import { makeStyles } from '@mui/styles';

export default makeStyles({
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
    cursor: 'pointer',
    borderRadius: '0px 12px 0px 0px'
  },
  border: {
    border: 'solid'
  },
  fullHeightCard: {
    height: '100%'
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '13px !important',
    height: '100%',
    position: 'relative',
    filter: 'drop-shadow(0px 5px 50px rgba(0, 0, 0, 0.10))'
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white'
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white'
  },
  grid: {
    display: 'flex'
  },
  details: {
    // display: 'flex',
    // justifyContent: 'space-between',
    margin: '20px'
  },
  title: {
    padding: '0 16px'
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between'
  },
  cardAction: {
    display: 'block',
    textAlign: 'initial'
  }
});
