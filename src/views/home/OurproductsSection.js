import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import NavbarSection from './NavbarSection';
import JumbotronSection from './JumbotronSection';
import VideoSection from './VideoSection';

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
import ImgProducts1 from '../../assets/img/p1.png'
import ImgStar5 from '../../assets/img/star5.png'
import ImgStar4 from '../../assets/img/star4.png'
import ImgStar3 from '../../assets/img/star3.png'

export default function OurproductsSection() {
  const classes = useStyles();

  return (
    <div>
      <Typography className={classes.title} variant="h3" gutterBottom align="center">
        Our Products </Typography>
      <Grid container>
        <Grid item xs={3} sm={2}>
          <ItemProduct name='Dummy Text' star='5' price='Rp 300.000' />
        </Grid>
        <Grid item xs={3} sm={2}>
          
        </Grid>
        <Grid item xs={3} sm={2}>

        </Grid>
        <Grid item xs={3} sm={2}>

        </Grid>
        <Grid item xs={3} sm={2}>

        </Grid>
        <Grid item xs={3} sm={2}>

        </Grid>
      </Grid>
    </div>
  )
}

const useStyles = makeStyles(theme => ({
  title: {
    marginTop: '5%'
  },
  imgProducts: {
    width: '100%'
  },
  imgStar: {
    width: '60%',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  }
}));

function ItemProduct(props) {
  const classes = useStyles();
  const Star = props.star;
  let StarImg;
  switch (props.star) {
    case '5':
      StarImg = ImgStar5
      break;
    case '4':
      StarImg = ImgStar4
      break;
    case '3':
      StarImg = ImgStar3
      break;
  }
  return (
    <div>
      <img className={classes.imgProducts} src={ImgProducts1} />
      <Typography variant="h6" gutterBottom align='center'>
        {props.name} </Typography>
      <img className={classes.imgStar} src={StarImg} />
      <Typography variant="subtitle1" gutterBottom align='center'>
        {props.price} </Typography>
    </div>
  )
}