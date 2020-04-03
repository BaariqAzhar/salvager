import React from 'react';
// import logo from './logo.svg';
// import './App.css';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Grid, Container } from '@material-ui/core';
import Box from '@material-ui/core/Box';
// import MenuIcon from '@material-ui/icons/Menu';
import WhiteLogo from '../../assets/img/white-logo.png';
import WaIcon from '../../assets/img/wa.png';
import TokpedIcon from '../../assets/img/tokped.png';
import IgIcon from '../../assets/img/ig.png';
import letterIcon from '../../assets/img/letter.png';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
// import EmailIcon from '@material-ui/icons/Email';
// import AccountCircle from '@material-ui/icons/AccountCircle';

export default function FooterSection() {
    const classes = useStyles();

    return (
        <div className={classes.firstDiv}>
            <Container>
                <Grid container>
                    <Grid item xs={12} sm={4} className={classes.gridItem}>
                        {/* <img src={WhiteLogo} className={classes.whiteLogo} /> */}
                        <Box
                            display="flex"
                            alignItems="center"
                            p={1}
                            m={1}
                            css={{ height: 100 }}
                        >
                            <img align="center"
                                justify="center"
                                direction="column" src={WhiteLogo} className={classes.whiteLogo} />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={3} className={classes.gridItem}>
                        <Typography variant="subtitle1" gutterBottom className={classes.text}>
                            Official Account
                    </Typography>
                        <div className={classes.listSocialMedia}>
                            <img src={WaIcon} className={classes.icon} />
                            <Typography display="inline" variant="subtitle2" gutterBottom className={classes.text}>
                                +628123456789
                        </Typography>
                        </div>
                        <div className={classes.listSocialMedia}>
                            <img src={TokpedIcon} className={classes.icon} />
                            <Typography display="inline" variant="subtitle2" gutterBottom className={classes.text}>
                                salvager
                        </Typography>
                        </div>
                        <div className={classes.listSocialMedia}>
                            <img src={IgIcon} className={classes.icon} />
                            <Typography display="inline" variant="subtitle2" gutterBottom className={classes.text}>
                                salvagerindonesia
                        </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={2} className={classes.gridItem}>
                        <Typography variant="subtitle1" gutterBottom className={classes.text}>
                            Info
                    </Typography>
                        <div className={classes.listSocialMedia}>
                            <Typography display="inline" variant="subtitle2" gutterBottom className={classes.text}>
                                Payment Info
                        </Typography>
                        </div>
                        <div className={classes.listSocialMedia}>
                            <Typography display="inline" variant="subtitle2" gutterBottom className={classes.text}>
                                FAQ
                        </Typography>
                        </div>
                        <div className={classes.listSocialMedia}>
                            <Typography display="inline" variant="subtitle2" gutterBottom className={classes.text}>
                                Term &amp; Condition
                        </Typography>
                        </div>
                        <div className={classes.listSocialMedia}>
                            <Typography display="inline" variant="subtitle2" gutterBottom className={classes.text}>
                                Contact
                        </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={3} className={classes.gridItem}>
                        <div>
                            <img src={letterIcon} className={classes.letterIcon} />
                            <Typography display="inline" variant="subtitle1" gutterBottom className={classes.text}>
                                Join our mailing list
                        </Typography>
                        </div>
                        <form >
                            <TextField className={classes.letter} placeholder="your email" />
                            <br />
                            <Button className={classes.button} variant="contained">
                                Send </Button>
                        </form>
                    </Grid>
                </Grid>
            </Container>
        </div >
    )
}

const useStyles = makeStyles(theme => ({
    firstDiv: {
        backgroundColor: '#434c57',
        marginTop: '3rem',
        padding: '2rem',
        color: 'white'
    },
    whiteLogo: {
        width: '80%',
        marginTop: 'auto',
        marginBottom: 'auto'
    },
    icon: {
        width: '2em',
        marginRight: '1em',
    },
    text: {
        color: 'white'
    },
    listSocialMedia: {
        marginBottom: '1em'
    },
    letter: {
        backgroundColor: 'white',
        paddingLeft: '1em',
        // borderRadius: '15px',
        marginTop: '1em'
    },
    letterIcon: {
        marginRight: '1em'
    },
    button: {
        backgroundColor: '#DCE2E2 ',
        color: 'black',
        marginTop: '1em',
    },
    gridItem: {
        marginBottom: '1rem'
    }
}));