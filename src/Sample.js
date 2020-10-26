import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Header from './Component/Header'
import Navbar from './Component/Navbar'
import Center from './Component/Center'
import Dividers from './Component/Divider'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      width: '100%',
      height: 'auto',
      padding: '5px 50px'
    },
  },
  adjust: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
  },
  
}));

export default function Sample() {
  const classes = useStyles();

  return (
    <div className={classes.root}> 
      <Paper >
          <Header />
          <div className={classes.adjust}>
            <Navbar />
            <Center />
          </div>
          <Dividers/>
      </Paper>
    </div>
  );
}