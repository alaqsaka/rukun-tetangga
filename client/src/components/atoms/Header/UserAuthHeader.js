import React from 'react';
import useStyles from './styles';
import { Avatar, Button } from '@mui/material';

const UserAuthHeader = (props) => {
  console.log(props);
  const classes = useStyles();
  return (
    <div className={classes.profile}>
      <Avatar className={classes.purple} alt="" src="">
        {props.namaDepan.charAt(0)}
      </Avatar>
      <Button
        variant="contained"
        className={classes.logout}
        color="error"
        onClick={props.logout}
      >
        Logout
      </Button>
    </div>
  );
};

export default UserAuthHeader;
