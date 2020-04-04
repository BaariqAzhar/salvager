import React from 'react';
// import logo from './logo.svg';
// import './App.css';
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
import ImgProducts2 from '../../assets/img/p2.png'
import ImgProducts3 from '../../assets/img/p3.png'
import ImgProducts4 from '../../assets/img/p4.png'
import ImgProducts5 from '../../assets/img/p5.png'
import ImgStar5 from '../../assets/img/star5.png'
import ImgStar4 from '../../assets/img/star4.png'
import ImgStar3 from '../../assets/img/star3.png'
import { Link } from '@material-ui/core';

export default function OurproductsSection() {
  const classes = useStyles();

  return (
    <div>
      <Typography className={classes.title} variant="h3" gutterBottom align="center">
        Our Products </Typography>
      <Grid container>
        <Grid item xs={4} sm={2}>
          <Link style={{ textDecoration: 'none' }} className={classes.viewLink}>
            <ItemProduct name='Dummy Text' star='5' price='Rp 300.000' product={ImgProducts1} />
          </Link>
        </Grid>
        <Grid item xs={4} sm={2}>
          <Link style={{ textDecoration: 'none' }} className={classes.viewLink}>
            <ItemProduct name='Dummy Text' star='5' price='Rp 300.000' product={ImgProducts2} />
          </Link>
        </Grid>
        <Grid item xs={4} sm={2}>
          <Link style={{ textDecoration: 'none' }} className={classes.viewLink}>
            <ItemProduct name='Dummy Text' star='5' price='Rp 300.000' product={ImgProducts3} />
          </Link>
        </Grid>
        <Grid item xs={4} sm={2}>
          <Link style={{ textDecoration: 'none' }} className={classes.viewLink}>
            <ItemProduct name='Dummy Text' star='5' price='Rp 300.000' product={ImgProducts4} />
          </Link>
        </Grid>
        <Grid item xs={4} sm={2}>
          <Link style={{ textDecoration: 'none' }} className={classes.viewLink}>
            <ItemProduct name='Dummy Text' star='5' price='Rp 300.000' product={ImgProducts5} />
          </Link>
        </Grid>
        <Grid item xs={4} sm={2}>
          <Link style={{ textDecoration: 'none' }} className={classes.viewLink}>
            <ItemProduct name='Dummy Text' star='5' price='Rp 300.000' product={ImgProducts3} />
          </Link>
        </Grid>
      </Grid>
    </div>
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      Button: {
        textTransform: 'none'
      },
    },
  },
  viewButton: {
    textTransform: 'none',
    margin: '0%'
  },
  viewLink: {
    textTransform: 'none',
    margin: '0%',
    textDecoration: 'none',
    textDecoration: 'none'
  },
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
      <img className={classes.imgProducts} src={props.product} />
      <Typography variant="h6" gutterBottom align='center'>
        {props.name} </Typography>
      <img className={classes.imgStar} src={StarImg} />
      <Typography variant="subtitle1" gutterBottom align='center'>
        {props.price} </Typography>
    </div>
  )
}