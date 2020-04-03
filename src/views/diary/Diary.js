import React, { useState, useEffect } from 'react';
import { makeStyles, withTheme } from '@material-ui/core/styles';

export default function Diary() {
    const classes = useStyles();

    const [hasError, setErrors] = useState(false);
    const [diaries, setDiaries] = useState({})

    async function fetchData() {
        const res = await fetch("https://salvagerapi.salvagerindonesia.com/api/v1/diaries?format=json")
        const diaries = await res.json()
        const [item] = diaries;
        setDiaries(item);
        console.log([item]);
        console.log(diaries);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className={classes.firstDiv}>
            <img src={diaries.image} />
            <p>{diaries.headline}</p>
            <p>{diaries.content}</p>
        </div>
    )
}

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));
