import React from 'react';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import { Link } from '@material-ui/core';
import { emphasize } from "@material-ui/core/styles/colorManipulator";

import NavbarSection from '../NavbarSection'
import DiaryListSection from './DiaryListSection'
import FooterSection from '../home/FooterSection';

import ImgPattern from '../../assets/img/pattern2.png'

export default function Products() {
    const classes = useStyles();

    return (
        <div className={classes.firstDiv}>  
            <Container>
                <NavbarSection theme='dark' />
                <DiaryListSection />
            </Container>
            <FooterSection />
        </div>
    )
}

const useStyles = makeStyles(theme => ({
    firstDiv: {
        backgroundImage: `url(${ImgPattern})`,
        backgroundSize: 'cover',
    },
    productImg: {
        width: '100%'
    },
    imgProducts: {
        width: '100%',
        marginBottom: '1rem'
    },
    imgStar: {
        width: '30%',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: '1rem'
    },
    link: {
    }
}));
