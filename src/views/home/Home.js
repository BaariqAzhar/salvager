import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import NavbarSection from '../home/NavbarSection';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import HomeBackgroundImage from '../../assets/img/home-background.png'
import '../../assets/css/home.css'
import BackgroundImage from "react-background-image";

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
  }
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div>
      <img src={HomeBackgroundImage} className={classes.backgroundImage} alt='website background' />
        <NavbarSection />
      <img src={BackgroundImage} />

    </div>
  )
}
