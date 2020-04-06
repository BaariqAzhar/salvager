import React from 'react';
import { Router, Route, Switch, Link } from 'react-router-dom';

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

import StarComponent from '../StarComponent';
import ItemProductComponent from '../ItemProductComponent';

export default function OurproductsSection() {
  const classes = useStyles();

  return (
    <div>
      <Typography className={classes.title} variant="h3" gutterBottom align="center">
        Our Products </Typography>

      <Grid container>
        <Grid item xs={4} sm={2}>
          <ItemProductComponent link={'/products'} name={'Dummy Text'} star={'5'} starSize={'1em'} price={'Rp 300.000'} product={ImgProducts1} />
        </Grid>
        <Grid item xs={4} sm={2}>
          <ItemProductComponent link={'/products'} name={'Dummy Text'} star={'4'} starSize={'1em'} price={'Rp 300.000'} product={ImgProducts2} />
        </Grid>
        <Grid item xs={4} sm={2}>
          <ItemProductComponent link={'/products'} name={'Dummy Text'} star={'5'} starSize={'1em'} price={'Rp 300.000'} product={ImgProducts3} />
        </Grid>
        <Grid item xs={4} sm={2}>
          <ItemProductComponent link={'/products'} name={'Dummy Text'} star={'3'} starSize={'1em'} price={'Rp 300.000'} product={ImgProducts4} />
        </Grid>
        <Grid item xs={4} sm={2}>
          <ItemProductComponent link={'/products'} name={'Dummy Text'} star={'4'} starSize={'1em'} price={'Rp 300.000'} product={ImgProducts5} />
        </Grid>
        <Grid item xs={4} sm={2}>
          <ItemProductComponent link={'/products'} name={'Dummy Text'} star={'4'} starSize={'1em'} price={'Rp 300.000'} product={ImgProducts3} />
        </Grid>
      </Grid>
    </div >
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
    // textTransform: 'none',
    // margin: '0%'
  },
  title: {
    marginTop: '5%'
  },
  imgProducts: {
    width: '100%'
  },
}));

function ItemProduct(props) {
  const classes = useStyles();
  return (
    <div>
      <Link to={props.link} style={{ textDecoration: 'none' }}>
        <Button><img className={classes.imgProducts} src={props.product} /></Button>
        <Typography variant="h6" gutterBottom align='center'>
          {props.name} </Typography>
        <StarComponent star={'5'} size={'1em'} />
        <Typography variant="subtitle1" gutterBottom align='center'>
          {props.price} </Typography>
      </Link>
    </div>
  )
}