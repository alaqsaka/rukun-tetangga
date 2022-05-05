import React from 'react';
import { useSelector } from 'react-redux';
import Activity from './Activity/Activity';
// import useStyles from './styles';

const Activities = () => {
  const activities = useSelector((state) => state.activities);
  //   const classes = useStyles();
  console.log(activities);
  return (
    <>
      Activities
      <Activity />
      <Activity />
      <Activity />
    </>
  );
};

export default Activities;
