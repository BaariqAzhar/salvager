import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import JumbotronSection from '../home/JumbotronSection';
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


export default function VideoSection() {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            {/* <Container  */}
                <Grid container >
                    <Grid item xs={12} sm={6}>
                        <img className={classes.ImgVideo} src={ImgVideo} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography align="justify" className={classes.description} variant="h5" gutterBottom>
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.
                            <br /> Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Typography>
                        <Button className={classes.button} variant="contained">
                            Find Out </Button>
                    </Grid>
                </Grid>
            {/* </Container> */}
        </div>
    )
}

const useStyles = makeStyles(theme => ({
    // root: {
    //     '& > *': {
    //         margin: theme.spacing(1),
    //     },
    // },
    container: {
        marginTop: '2%'
    },
    ImgVideo: {
        width: '95%',
        marginTop: '2em',
        marginRight: '0.5em',
        marginLeft: '0.5em',
    },
    description: {
        marginTop: '1em',
        marginRight: '0.5em',
        marginLeft: '0.5em',
    },
    button: {
        backgroundColor: '#434c57',
        color: 'white',
        marginTop: '0.5em',
        marginBottom: '2em',
        marginRight: '0.5em',
        marginLeft: '1em',
    },
}));
