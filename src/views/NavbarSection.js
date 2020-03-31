import React from 'react';
import ReactDOM from 'react-dom';
// import logo from './logo.svg';
// import './App.css';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import BlackLogo from '../assets/img/black-logo.png';
import WhiteLogo from '../assets/img/white-logo.png';
import { Grid } from '@material-ui/core';
import { Router, Route, Switch, Link } from 'react-router-dom';

let Color;

export default function NavbarSection(props) {
    const classes = useStyles();
    let Logo;
    // let Color;
    switch (props.theme) {
        case 'dark':
            Logo = BlackLogo;
            Color = 'black';
            break;
        case 'light':
            Logo = WhiteLogo;
            Color = 'white';
            break;
    }

    return (
        <div>
            <div position="static" className={classes.navbar}>
                <Grid container>
                    <Grid item xs={12} sm={6}>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <img className={classes.logo} src={Logo} />
                        </IconButton>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Toolbar>
                            <Link style={{color: Color}} className={classes.link} to='/' color="inherit">HOME</Link>
                            <Link style={{color: Color}} className={classes.link} to='/products' color="inherit">STORY</Link>
                            <Link style={{color: Color}} className={classes.link} to='/products' color="inherit">PRODUCTS</Link>
                            <Link style={{color: Color}} className={classes.link} to='/products' color="inherit">DIARY</Link>
                            <Link style={{color: Color}} className={classes.link} to='/products' color="inherit">CONTACT</Link>
                        </Toolbar>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

const useStyles = makeStyles(theme => ({
    navbar: {
        color: 'black',
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
    },
    link: {
        // color: Color,
        fontWeight: 'bold',
        margin: '1rem'
    }
}));