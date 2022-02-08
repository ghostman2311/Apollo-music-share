import React from 'react';
import { Toolbar, AppBar, Typography } from '@material-ui/core';
import {makeStyles } from '@material-ui/core/styles';
import HeadsetTwoToneIcon from '@material-ui/icons/HeadsetTwoTone';
//import Icon from '@material-ui/core/Icon';


const useStyles = makeStyles(theme => ({title: {
  marginLeft: theme.spacing(2)
}}))


function Header()
{
  const classes = useStyles();
    return(
      <AppBar color="primary" position="fixed">
        <Toolbar>
          <HeadsetTwoToneIcon />
          <Typography className={classes.title} variant="h6" component="h1">
            Apollo Music Share
          </Typography>
        </Toolbar>
      </AppBar>
    )
}

export default Header;
