import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import NavbarSection from '../home/NavbarSection';
import JumbotronSection from '../home/JumbotronSection';
import VideoSection from '../home/VideoSection';
import OurproductsSection from '../home/OurproductsSection';

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


export default function Home() {
  const classes = useStyles();

  return (
    <div>
      <img src={ImgPattern} className={classes.backgroundImage} alt='website background' />
      <JumbotronSection/>
      <VideoSection/>
      <OurproductsSection/>
    </div>
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  backgroundImage: {
    width: '100%',
    position: 'absolute',
    backgroundBlendMode: 'luminosity',
    backgroundSize: 'cover',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  descriptionBackground: {
    marginTop: '50%',
    marginBottom: '5%',
    color: 'white',
  },
  button: {
    backgroundColor: '#434c57',
    color: 'white',
    marginBottom: '5%',
  },
  firstContainer: {
    backgroundImage: `url(${HomeBackgroundImage})`,
    backgroundSize: 'cover',
  },
  secondContainer: {
    
  }
}));
