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
  return (
    <div>
      Header
    </div>
  )
}

export default Header
