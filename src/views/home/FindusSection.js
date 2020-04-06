import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import InstagramIcon from '../../assets/img/instagram.png'

import bunnyIcon from '../../assets/img/bunny.png'

import '../../assets/css/home.css'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


export default function FindusSection() {
    const classes = useStyles();
    const [instagrams, setInstagrams] = useState([])

    async function fetchInstagrams() {
        const res = await fetch("https://salvagerapi.salvagerindonesia.com/api/v1/instagrams/?format=json")
        const instagrams = await res.json()
        setInstagrams(instagrams)
        console.log(instagrams)
    }

    useEffect(() => {
        fetchInstagrams();
    }, []);

    let instagramList = instagrams.map((instagram) => {

        return <Grid item xs={12} sm={4}>
            <Button>
                <a href={instagram.post_url}>
                    <img className={classes.igPhoto} src={instagram.image} />
                </a>
            </Button>
        </Grid>
    })

    instagramList = instagramList.slice(Math.max(instagramList.length - 3, 0))

    return (
        <div>
            <a href='https://www.instagram.com/salvagerindonesia/' className={classes.linkInstagram} color="inherit">
                <div className={classes.title} align='center' >
                    <Typography display="inline" variant="h5" gutterBottom align="center">
                        Find us on
                    </Typography>
                    <img display="inline" src={InstagramIcon} />
                </div>
            </a>
            <Grid container>
                {instagramList}
            </Grid>
            <div align='center' className={classes.title}>
                <img className={classes.bunnyIcon} src={bunnyIcon} />
                <Typography display="inline" variant="h5" gutterBottom align="center">
                    Cruelty Free </Typography>
            </div>
        </div>
    )
}

const useStyles = makeStyles(theme => ({
    title: {
        marginTop: '5%'
    },
    igPhoto: {
        width: '100%',
        height: '100%'
    },
    bunnyIcon: {
        width: '3em',
        marginRight: '1em'
    }
}));
