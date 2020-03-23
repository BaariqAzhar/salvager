import React from 'react';
// import logo from './logo.svg';
// import './App.css';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import WhiteLogo from '../../assets/img/white-logo.png';
import { Grid } from '@material-ui/core';

export default function NavbarSection() {
    const classes = useStyles();

    return (
        <div>
            <div position="static" className={classes.navbar}>
                <Grid container>
                    <Grid item xs={12} sm={6}>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <img className={classes.logo} src={WhiteLogo} />
                        </IconButton>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Toolbar>
                            <Button color="inherit">Home</Button>
                            <Button color="inherit">Story</Button>
                            <Button color="inherit">Products</Button>
                            <Button color="inherit">Diary</Button>
                            <Button color="inherit">Contact</Button>
                        </Toolbar>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

const useStyles = makeStyles(theme => ({
    navbar: {
        // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        // flexGrow: 1,
        // color: 'white',
        // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        // backgroundColor: 'black',
        // borderRadius: 3,
        // border: 0,
        color: 'white',
        // height: 48,
        // padding: '0 30px',
        boxShadow: '0 3px 5px 2px edeeec',
        // boxShadow: 'none'
        backgroundColor: 'transparent',
    },
    menuButton: {
        marginRight: theme.spacing(2),
        width: '70%',
    },
    title: {
        flexGrow: 1,
    },
    background: {
        backgroundColor: 'transparent',
    },
    logo: {
        width: '100%'
    }
}));