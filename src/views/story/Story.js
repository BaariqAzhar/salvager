import React from 'react';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import {
  Container,
  Typography,
  Grid,
} from '@material-ui/core'

import NavbarSection from '../NavbarSection'
import FooterSection from '../home/FooterSection'

import ImgPattern from '../../assets/img/pattern2.png'
import ImgDarkLogo from '../../assets/img/logoStory.png'
import ImgStory1 from '../../assets/img/story1.png'
import ImgStory2 from '../../assets/img/story2.png'
import ImgStory3 from '../../assets/img/story3.png'


export default function Story() {
  window.scrollTo(0, 0)
  const classes = useStyles();

  return (
    <div className={classes.firstDiv}>
      <Container>
        <NavbarSection theme='dark' logo='off' />
        <Typography variant="h5" gutterBottom align="center">
          about </Typography>
        <img className={classes.imgDarkLogo} src={ImgDarkLogo} />
        {/* <div align='center' className={classes.title}>
          <Typography display="inline" variant="h5" gutterBottom align="center">
            about </Typography>
          <img className={classes.imgDarkLogo} src={ImgDarkLogo} />
        </div> */}
        <Grid container>
          <Grid item xs={12} sm={12} md={2}></Grid>
          <Grid item xs={12} sm={12} md={8}>
            <Typography alignText='justify' className={classes.description} display="inline" component="p" gutterBottom>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since. <br />
              An unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={2}></Grid>
        </Grid>
        <img src={ImgStory1} className={classes.firstImgStory} />
        <img src={ImgStory2} className={classes.imgStory} />
        <img src={ImgStory3} className={classes.imgStory} />
      </Container>
      <FooterSection />
    </div>
  )
}

const useStyles = makeStyles(theme => ({
  firstDiv: {
    backgroundImage: `url(${ImgPattern})`,
    backgroundSize: 'cover',
    paddingTop: '5rem',
  },
  title: {
    marginBottom: '1rem'
  },
  description: {
    // marginBottom: '1000rem'
    // textAlign: 'center'
  },
  imgDarkLogo: {
    marginLeft: '2em',
    height: '4em',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '2em'
  },
  firstImgStory: {
    marginTop: '2rem',
    width: '100%',
  },
  imgStory: {
    width: '100%',
  }
}));
