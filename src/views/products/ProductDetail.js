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

export default function ProductDetail() {
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
        <div>
            <Container>
                <NavbarSection theme='dark' />
                <Grid container>
                    <Grid item xs={12} sm={6} md={6}>
                        <img className={classes.productImage} src={productImageList[0]} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <div className={classes.productTextContainer}>
                                    <Grid container spacing={1}>
                                        <Grid item xs={12}>
                                            <Typography gutterBottom variant="h4">
                                                {product.name}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <StarComponent star={getAverageStars(productReviewlist)} size={'25%'} />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography gutterBottom variant="h5">
                                                Rp. {product.price}
                                            </Typography>
                                        </Grid>
                                        <Divider />
                                        <Grid item xs={12}>
                                            <Typography component="p">
                                                {product.description}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </div>
                            </Grid>
                        </Grid>
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
    return Math.ceil( totalReviewStars/reviewLength ); 
}

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    productTitle: {
        alignItems: 'center',
        marginTop: '1rem'
    },
    productImage: {
        widht: '32rem',
        height: '32rem'
    }
}));
