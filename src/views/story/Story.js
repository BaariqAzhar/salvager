import React from 'react';
import { makeStyles, withTheme } from '@material-ui/core/styles';

export default function Story() {
  const classes = useStyles();

  return (
    <div className={classes.firstDiv}>
        asdasd
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
