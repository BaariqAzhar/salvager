import React, { useState, useEffect } from 'react';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography';
import { Link } from '@material-ui/core';
import { Divider } from 'antd';

export default function DiaryListSection() {
    const [diaries, setDiaries] = useState([])

    async function fetchDiaries() {
        const res = await fetch("https://salvagerapi.salvagerindonesia.com/api/v1/diaries?format=json")
        const diaries = await res.json()
        console.log(diaries)
        setDiaries(diaries)
    }

    var diaryList = diaries.map((diary) => {
        return <div key={diary.toString()}>
            <ItemDiary diary={diary} />
        </div>
    })

    useEffect(() => {
        fetchDiaries()
    }, [])

    const classes = useStyles();

    return (
        <Grid container spacing={1}>
            {diaryList}
        </Grid>
    )
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
    diaryImage: {
        // height: '32rem',
        width: '100%',
        margin: '2rem',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    diaryTextContainer: {
        marginTop: '1rem',
        marginRight: '2rem',
        marginBottom: '2rem',
        marginLeft: '0rem',
        padding: '2rem'
    },
}));

function ItemDiary(props) {
    const classes = useStyles();
    const diary = props.diary
    return (
        <div className={classes.diary}>
            <Grid container>
                <Grid item xs={12} sm={6} md={6}>
                    <img className={classes.diaryImage} src={diary.image} />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <div className={classes.diaryTextContainer}>
                                <Typography gutterBottom variant="h4">
                                    {diary.headline}
                                </Typography>
                                <Typography gutterBottom variant="h6">
                                    By {diary.created_by}
                                </Typography>
                                <Divider />
                                <Typography component="p">
                                    {diary.content}
                                </Typography>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div >
    )
}
