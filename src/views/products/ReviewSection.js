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
        <div className={classes.firstDiv}>
            <Grid container>
                <Grid item xs={12} sm={2}></Grid>
                <Grid item xs={12} sm={8}>
                    <Typography variant='h4' align='center'>Customer Review</Typography>
                    <div align='center' className={classes.starBasedOn}>
                        <StarComponent display='inline' star={averageStars} size={'2em'} />
                        <Typography className={classes.basedOn} display='inline'>based on {reviewCount} reviews</Typography>
                    </div>
                    {reviewList}
                </Grid>
                <Grid item xs={12} sm={2}></Grid>
            </Grid>
        </div >
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
    review: {
        marginTop: '3em'
    },
    reviewTextContainer: {
    },
    firstDiv: {
        marginTop: '3rem'
    },
    basedOn: {
        marginLeft: '1rem',
        // marginTop: '1000em'
    },
    starBasedOn: {
        marginTop: '1rem'
    },
    shortComment: {
        marginTop: '0.5em'
    }
}));

function ItemReview(props) {
    const classes = useStyles();
    const review = props.review
    return (
        <div className={classes.review}>
            <div className={classes.reviewTextContainer}>
                <StarComponent star={review.star} size={'1.5em'} />
                <Typography className={classes.shortComment} gutterBottom variant="h5">
                    {review.headline}
                </Typography>
                <Typography gutterBottom variant="p">
                    from {review.username} on {review.pub_time.substring(0, 10)}
                </Typography>
                <Typography component="p">
                    {review.content}
                </Typography>
            </div>
        </div >
    )
}
