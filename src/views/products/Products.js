import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import { Link } from '@material-ui/core';
import { emphasize } from "@material-ui/core/styles/colorManipulator";

import NavbarSection from '../NavbarSection'
import FooterSection from '../home/FooterSection'
import ItemProductComponent from '../ItemProductComponent'

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
    window.scrollTo(0, 0)
    const classes = useStyles();
    const [products, setProducts] = useState([])

    async function fetchProducts() {
        const res = await fetch("https://salvagerapi.salvagerindonesia.com/api/v1/products/?format=json")
        const products = await res.json()
        setProducts(products)
        console.log(products)
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    const productList = products.map((product) => {
        const link = "/product/" + product.id
        const imageLink = "https://salvagerapi.salvagerindonesia.com" + product.product_images[0]
        console.log(imageLink)
        return (
            <Grid item xs={6} sm={4}>
                <ItemProductComponent
                    link={link}
                    name={product.name}
                    star={getProductAverageRating(product)}
                    starSize={'1em'}
                    price={product.price}
                    product={imageLink}
                    starDisplay={'block'} />
            </Grid >
        )
    })
    return (
        <div className={classes.firstDiv}>
            <Container className={classes.productsContainer}>
                <NavbarSection theme='dark' />
                <Grid container>
                    {productList}
                </Grid>
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
        minHeight: '100%'
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
    },
    productsContainer: {
        marginTop: '4rem',
        marginBottom: '10rem'
    }
}));

function getProductAverageRating(product) {
    if (product.product_reviews.length == 0) {
        return 0
    } else {
        let reviewCount = product.product_reviews.length
        let averageRating = product.product_reviews.reduce((acc, review) => {
            return acc + (review.rating / reviewCount)
        })
        return averageRating
    }
}