import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import JumbotronSection from '../home/JumbotronSection';
import VideoSection from '../home/VideoSection';
import OurproductsSection from '../home/OurproductsSection';
import FindusSection from '../home/FindusSection';
import FooterSection from '../home/FooterSection'

import { makeStyles, withTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import HomeBackgroundImage from '../../assets/img/home-background.png'
import '../../assets/css/home.css'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import ImgPattern from '../../assets/img/pattern.png'
import ImgVideo from '../../assets/img/video.png'


export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.firstDiv}>
      {/* <img src={ImgPattern} className={classes.backgroundImage} alt='website background' /> */}
      <JumbotronSection />
      <VideoSection />
      <OurproductsSection />
      <FindusSection />
      <FooterSection />
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
  firstDiv: {
    backgroundImage: `url(${ImgPattern})`,
    backgroundSize: 'cover',
  }
}));
