import React from 'react';
import AppBar from '@material-ui/core';
import Toolbar from '@material-ui/core';
import Typography from '@material-ui/core';
import CssBaseline from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles ((theme) => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <AppBar 
        position= 'static'
        color= 'white'
        elevation= {0}
        className={classes.appBar}
      />
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap>
          Blog Me
        </Typography>
      </Toolbar>
    </>
  )
}

export default Header
