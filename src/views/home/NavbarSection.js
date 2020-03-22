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

const useStyles = makeStyles(theme => ({
    root: {
        // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        // flexGrow: 1,
        // color: 'white',
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        backgroundColor: 'black',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    background: {
        backgroundColor: 'transparent',
    },
}));

export default function NavbarSection() {
    const classes = useStyles();

    return (
        <div>
            <AppBar position="static" className={classes.background}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <img src={WhiteLogo} />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                    </Typography>
                    <Button color="inherit">Home</Button>
                    <Button color="inherit">Story</Button>
                    <Button color="inherit">Products</Button>
                    <Button color="inherit">Diary</Button>
                    <Button color="inherit">Contact</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}
