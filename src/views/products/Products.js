import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import { Link } from '@material-ui/core';
import { emphasize } from "@material-ui/core/styles/colorManipulator";

import NavbarSection from '../NavbarSection'


import ImgPattern from '../../assets/img/pattern2.png'
import ImgProducts1 from '../../assets/img/p1.png'
import ImgProducts2 from '../../assets/img/p2.png'
import ImgProducts3 from '../../assets/img/p3.png'
import ImgProducts4 from '../../assets/img/p4.png'
import ImgProducts5 from '../../assets/img/p5.png'
import ImgStar5 from '../../assets/img/star5.png'
import ImgStar4 from '../../assets/img/star4.png'
import ImgStar3 from '../../assets/img/star3.png'

export default function Products() {
    const classes = useStyles();
    return (
        <div className={classes.firstDiv}>
            <Container>
                {console.log('asd')}
                <NavbarSection theme='dark' />
                <Grid container>
                    <Grid item xs={6} sm={4}>
                        <ItemProduct
                            name='Product Text'
                            star='5'
                            price='Rp 300.000'
                            product={ImgProducts1}
                            link="/product1" />
                    </Grid>
                    <Grid item xs={6} sm={4}>
                        <ItemProduct
                            name='Parfum'
                            star='5'
                            price='Rp 300.000'
                            product={ImgProducts1}
                            link="/product1" />
                    </Grid>
                    <Grid item xs={6} sm={4}>
                        <ItemProduct
                            name='Parfum'
                            star='5'
                            price='Rp 300.000'
                            product={ImgProducts1}
                            link="/product1" />
                    </Grid>
                </Grid>
            </Container>
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
            <Link to={props.link} className={classes.link} style={{ textDecoration: 'none' }}>
                <img className={classes.imgProducts} src={props.product} />
                <Typography variant="h4" gutterBottom align='center'>
                    {props.name} </Typography>
                <img className={classes.imgStar} src={StarImg} />
                <Typography variant="subtitle1" gutterBottom align='center'>
                    {props.price} </Typography>
            </Link>
        </div>
    )
}