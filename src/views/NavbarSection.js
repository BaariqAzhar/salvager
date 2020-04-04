import React, { useState, useEffect } from 'react';
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
import { Grid, Container } from '@material-ui/core';
import { Router, Route, Switch, Link } from 'react-router-dom';

import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconBurgerButton from '../assets/img/burgerBtn.png'
import IconBlackBurgerButton from '../assets/img/burgerBtnBlack.png'

let Color;

export default function NavbarSection(props) {

    let isMobile = false;
    if (window.innerWidth >= 425) {
        isMobile = false;
        console.log('ini desktop')
    } else {
        isMobile = true;
        console.log('ini mobile')
    }
    console.log(window.innerWidth)

    const classes = useStyles();
    let Logo;
    let LogoMobile;
    let IconBurger;
    switch (props.theme) {
        case 'dark':
            Logo = BlackLogo;
            IconBurger = IconBlackBurgerButton;
            Color = 'black';
            break;
        case 'light':
            Logo = WhiteLogo;
            IconBurger = IconBurgerButton;
            Color = 'white';
            break;
    }
    if (props.logo === 'off') {
        Logo = '';
    }

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = anchor => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <ListItem>
                    <Button><Link to='/' color="inherit">HOME</Link></Button>
                </ListItem>
                <Divider />
                <ListItem>
                    <Button><Link to='/story' color="inherit">STORY</Link></Button>
                </ListItem>
                <Divider />
                <ListItem>
                    <Button><Link to='/products' color="inherit">PRODUCTS</Link></Button>
                </ListItem>
                <Divider />
                <ListItem>
                    <Button><Link to='/diary' color="inherit">DIARY</Link></Button>
                </ListItem>
                <Divider />
                <ListItem>
                    <Button><Link to='/contact' color="inherit">CONTACT</Link></Button>
                </ListItem>
            </List>
        </div>
    );


    if (isMobile) {
        return (
            <div>
                {['left'].map(anchor => (
                    <React.Fragment key={anchor}>
                        <Button className={classes.mobileBurgerButton} onClick={toggleDrawer(anchor, true)}>
                            {/* {anchor} */}
                            <img src={IconBurger} />
                        </Button>
                        <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                            {list(anchor)}
                        </Drawer>
                    </React.Fragment>
                ))}
                <img className={classes.mobileLogo} src={Logo} disply='inline' />
            </div>
        )
    } else {
        return (
            <div>
                <div position="static" className={classes.navbar}>
                    <Container>
                        <Grid container>
                            <Grid item xs={12} sm={6}>
                                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                                    <img className={classes.logo} src={Logo} />
                                </IconButton>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Toolbar>
                                    <Button><Link style={{ color: Color }} className={classes.link} to='/' color="inherit">HOME</Link></Button>
                                    <Button><Link style={{ color: Color }} className={classes.link} to='/story' color="inherit">STORY</Link></Button>
                                    <Button><Link style={{ color: Color }} className={classes.link} to='/products' color="inherit">PRODUCTS</Link></Button>
                                    <Button><Link style={{ color: Color }} className={classes.link} to='/diary' color="inherit">DIARY</Link></Button>
                                    <Button><Link style={{ color: Color }} className={classes.link} to='/contact' color="inherit">CONTACT</Link></Button>
                                </Toolbar>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            </div>
        )
    }
}

const useStyles = makeStyles(theme => ({

    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    mobileLogo: {
        height: '3em',
        // width: '50%',
        marginLeft: '1em',
        marginTop: '1em',
    },
    mobileBurgerButton: {
        // marginLeft: '1em',
        marginTop: '1em',
    },

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