import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import JumbotronSection from './JumbotronSection';
import VideoSection from './VideoSection';

import { makeStyles, withTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import HomeBackgroundImage from '../../assets/img/home-background.png'
import InstagramIcon from '../../assets/img/instagram.png'
import igPhoto1 from '../../assets/img/ig1.png'
import igPhoto2 from '../../assets/img/ig2.png'
import igPhoto3 from '../../assets/img/ig3.png'
import igPhoto4 from '../../assets/img/ig4.png'

import bunnyIcon from '../../assets/img/bunny.png'

import '../../assets/css/home.css'
import BackgroundImage from "react-background-image";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { Link } from '@material-ui/core';

export default function FindusSection() {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.title} align='center' >
                <Typography display="inline" variant="h5" gutterBottom align="center">
                    Find us on </Typography>
                <img display="inline" src={InstagramIcon} />
            </div>
            <Grid container>
                <Grid item xs={6} sm={3}>
                    <img className={classes.igPhoto} src={igPhoto2} />
                </Grid>
                <Grid item xs={6} sm={3}>
                    <img className={classes.igPhoto} src={igPhoto1} />
                </Grid>
                <Grid item xs={6} sm={3}>
                    <img className={classes.igPhoto} src={igPhoto3} />
                </Grid>
                <Grid item xs={6} sm={3}>
                    <img className={classes.igPhoto} src={igPhoto4} />
                </Grid>
            </Grid>
            <div align='center' className={classes.title}>
                <img className={classes.bunnyIcon} src={bunnyIcon} />
                <Typography display="inline" variant="h5" gutterBottom align="center">
                    Cruelty Free </Typography>
            </div>
        </div>
    )
}

const useStyles = makeStyles(theme => ({
    title: {
        marginTop: '5%'
    },
    igPhoto: {
        width: '100%'
    },
    bunnyIcon: {
        width: '3em',
        marginRight: '1em'
    }
}));
