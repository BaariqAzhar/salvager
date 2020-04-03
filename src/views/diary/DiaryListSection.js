import React, { useState, useEffect } from 'react';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import { Link } from '@material-ui/core';

export default function DiaryListSection() {
    const [diaries, setDiaries] = useState({})

    async function fetchDiaries() {
        const res = await fetch("https://salvagerapi.salvagerindonesia.com/api/v1/diaries?format=json")
        const diaries = await res.json()
        console.log(diaries)
        setDiaries(diaries)
    }

    useEffect(() => {
        fetchDiaries()
    }, [])

    const classes = useStyles();

    return (
        <Grid container>
            
        </Grid>
    )
}


const useStyles = makeStyles(theme => ({

}));

function ItemDiary(props) {
    const classes = useStyles();
    const Star = props.star;
    let StarImg;
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
