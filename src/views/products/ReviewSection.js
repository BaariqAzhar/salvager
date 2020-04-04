import React, { useState, useEffect } from 'react';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import StarComponent from '../StarComponent'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import { Link } from '@material-ui/core';
import { Divider } from 'antd';

export default function ReviewSection(props) {
    const reviewCount = props.reviews.length
    const averageStars = getAverageStars(props.reviews)
    const reviewList = props.reviews.map((review) => {
        return <div key={review.toString()}>
            <Grid item xs={12}>
                <ItemReview review={review} />
            </Grid>
        </div>
    })

    const classes = useStyles();

    return (
        <Grid container spacing={1}>
            <Grid item xs={12}>
                <Typography variant='h4' align='center'>Customer Review</Typography>
            </Grid>
            <Grid item xs={12}>
                <Grid container alignItems='center' align='center' spacing={2}>
                    <Grid item xs={12} sm={6} align='right'>
                        <div className={classes.stars}>
                            <StarComponent star={averageStars} size={'20%'} />
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} align='left'>
                        <Typography>Based on {reviewCount} reviews</Typography>
                    </Grid>
                </Grid>
            </Grid>
            {reviewList}
        </Grid>
    )
}

function getAverageStars(reviews) {
    let reviewLength = reviews.length
    let totalReviewStars = reviews.reduce((a, b) => a + b, 0)
    return Math.ceil(totalReviewStars / reviewLength);
}

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    reviewImage: {
    },
    reviewTextContainer: {
    },
}));

function ItemReview(props) {
    const classes = useStyles();
    const review = props.review
    return (
        <div className={classes.review}>
            <Grid container>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <div className={classes.reviewTextContainer}>
                                <StarComponent star={review.star} size={'40%'} />
                                <Typography gutterBottom variant="h5">
                                    {review.headline}
                                </Typography>
                                <Typography gutterBottom variant="p">
                                    from {review.username} on {review.pub_time.substring(0, 10)}
                                </Typography>
                                <Typography component="p">
                                    {review.content}
                                </Typography>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div >
    )
}
