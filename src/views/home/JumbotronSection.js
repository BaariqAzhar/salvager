import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import NavbarSection from '../NavbarSection';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import HomeBackgroundImage from '../../assets/img/home-background.png'
import '../../assets/css/home.css'
import BackgroundImage from "react-background-image";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import ImgPattern from '../../assets/img/pattern.png'
import ImgVideo from '../../assets/img/video.png'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

let heightDevice = window.innerHeight;
let marginDescription = window.innerHeight * 0.5 + 'px';

export default function JumbotronSection() {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.firstContainer}>
                <Container>
                    {/* <NavbarSection theme="light" /> */}
                    <Grid container >
                        <Grid item item xs={12} sm={6} className={classes.descriptionBackground}>
                            <Typography className={classes.descriptionText} variant="h5" gutterBottom>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Typography>
                            <Button className={classes.button} variant="contained">
                                Find Out </Button>
                        </Grid>
                        <Grid item item xs={12} sm={6}>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>
    )
}

const useStyles = makeStyles(theme => ({
    descriptionBackground: {
        // marginBottom: '10%',
        marginTop: marginDescription,
        color: 'white',
    },
    descriptionText: {
        color: 'white'
    },
    button: {
        backgroundColor: '#434c57',
        color: 'white',
        marginBottom: '5%',
    },
    firstContainer: {
        backgroundImage: `url(${HomeBackgroundImage})`,
        backgroundSize: 'cover',
        height: heightDevice,
    },
}));
