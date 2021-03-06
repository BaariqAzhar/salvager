import React, { useState, useEffect } from 'react';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import NavbarSection from '../NavbarSection'
import ReviewSection from '../products/ReviewSection'
import FooterSection from '../home/FooterSection';
import StarComponent from '../StarComponent'
import { Container } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import ImgPattern from '../../assets/img/pattern2.png'

export default function ProductDetail() {
    window.scrollTo(0, 0)
    const classes = useStyles();
    const { id } = useParams();
    const [product, setProduct] = useState([])
    const [productImageList, setProductImage] = useState([])
    const [productReviewlist, setProductReview] = useState([])

    async function fetchProduct() {
        const res = await fetch("https://salvagerapi.salvagerindonesia.com/api/v1/products/" + id + "?format=json")
        const product = await res.json()
        setProduct(product)
        let productImages = product.product_images.map((imageLocation) => {
            return 'https://salvagerapi.salvagerindonesia.com/' + imageLocation
        })
        setProductImage(productImages)
        let productReviews = product.product_reviews.map((reviews) => {
            return reviews
        })
        setProductReview(productReviews)
    }

    useEffect(() => {
        fetchProduct();
    }, []);

    return (
        <div className={classes.firstDiv}>
            <Container>
                <NavbarSection theme='dark' />
                <Grid container>
                    <Grid item xs={12} sm={6} md={6} >
                        <img className={classes.productImage} src={productImageList[0]} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <div className={classes.productTextContainer}>
                            <Typography gutterBottom variant="h2">
                                {product.name}
                            </Typography>
                            <StarComponent starDisplay='' className={classes.star} align={'left'} star={getAverageStars(productReviewlist)} size={'2em'} />
                            <Typography className={classes.price} gutterBottom variant="h4">
                                Rp. {product.price}
                            </Typography>
                            <Divider />
                            <Typography component="p">
                                {product.description}
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
                <ReviewSection reviews={productReviewlist} />
            </Container>
            <FooterSection />
        </div>
    )
}

function getAverageStars(reviews) {
    let reviewLength = reviews.length
    let totalReviewStars = reviews.reduce((a, b) => a + b, 0)
    return Math.ceil(totalReviewStars / reviewLength);
}

const useStyles = makeStyles(theme => ({
    firstDiv: {
        backgroundImage: `url(${ImgPattern})`,
        backgroundSize: 'cover',
        paddingTop: '8rem',
    },
    productTitle: {
        alignItems: 'center',
        marginTop: '1rem'
    },
    productImage: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '80%',
        marginBottom: '2em'
    },
    star: {
        // display: 'block',
        // marginLeft: '1em',
        // marginRight: 'auto',
        // marginBottom: 'em',
    },
    price: {
        marginTop: '0.5em'
    }
}));
