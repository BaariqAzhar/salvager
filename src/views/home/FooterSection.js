import React from 'react';
// import logo from './logo.svg';
// import './App.css';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import WhiteLogo from '../../assets/img/white-logo.png';
import { Grid } from '@material-ui/core';

export default function FooterSection() {
    const classes = useStyles();

    return (
        <div>
            <div>
                <Grid container>
                    <Grid item xs={12} sm={4}>
                        <img src={WhiteLogo} />
                    </Grid>
                    <Grid item xs={12} sm={3}>

                    </Grid>
                    <Grid item xs={12} sm={2}>

                    </Grid>
                    <Grid item xs={12} sm={3}>

                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

const useStyles = makeStyles(theme => ({

}));