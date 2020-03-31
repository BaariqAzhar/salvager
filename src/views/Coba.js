import React from 'react';
import { makeStyles, withTheme } from '@material-ui/core/styles';

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.firstDiv}>

    </div>
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));
