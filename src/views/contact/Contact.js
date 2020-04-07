import React from 'react';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Link } from '@material-ui/core';
import { emphasize } from "@material-ui/core/styles/colorManipulator";
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import NavbarSection from '../NavbarSection'
import FooterSection from '../home/FooterSection'

import ImgPattern from '../../assets/img/pattern2.png'
import ImgIg from '../../assets/img/ig.png'
import ImgWhatsapp from '../../assets/img/wa.png'
import ImgTokopedia from '../../assets/img/tokped.png'
import ImgEmail from '../../assets/img/email.png'

export default function Contact() {
    window.scrollTo(0, 0)
    const classes = useStyles();

    return (
        <Grid className={classes.firstDiv}>
            <Container>
                <NavbarSection theme='dark' />
                <Typography variant="h3" align='center'>Contact</Typography>
                <div align='center' className={classes.list}>
                    <img src={ImgWhatsapp} />
                    <Typography className={classes.listText} display="inline" variant="h6" gutterBottom align="center">
                        +6232234324234 </Typography>
                </div>
                <div align='center' className={classes.list}>
                    <img src={ImgIg} />
                    <Typography className={classes.listText} display="inline" variant="h6" gutterBottom align="center">
                        salvagerindonesia </Typography>
                </div>
                <div align='center' className={classes.list}>
                    <img src={ImgTokopedia} />
                    <Typography className={classes.listText} display="inline" variant="h6" gutterBottom align="center">
                        salvagerindonesia </Typography>
                </div>
                <div align='center' className={classes.list}>
                    <img src={ImgEmail} />
                    <Typography className={classes.listText} display="inline" variant="h6" gutterBottom align="center">
                        info@salvager.com </Typography>
                </div>

                <Grid container className={classes.content} container spacing={4}>
                    <Grid item xs={12} sm={3}></Grid>
                    <Grid item className={classes.formGrid} item xs={12} sm={6}>
                        <form className={classes.form} noValidate autoComplete="off">
                            <TextField
                                id="name"
                                label='Name'
                                className={classes.textField}
                                placeholder="Write your name here..."
                                fullWidth
                                variant="filled"
                            />
                            <TextField
                                id="email"
                                label='Email'
                                className={classes.textField}
                                placeholder="Write your email here..."
                                fullWidth
                                variant="filled"
                            />
                            <TextField
                                id="phone"
                                label='Phone Number'
                                className={classes.textField}
                                placeholder="Write your phone number here..."
                                fullWidth
                                variant="filled"
                            />
                            <TextField
                                id="message"
                                label="Message"
                                className={classes.textField}
                                multiline
                                rows="6"
                                placeholder="Write your message here..."
                                fullWidth
                                variant="filled"
                            />
                        </form>
                    </Grid>
                    <Grid item
                        xs={12}
                        sm={12}
                        justify="center"
                        align="center">
                        <Button className={classes.button} variant="contained">Send Now</Button>
                    </Grid>
                    
                </Grid>
            </Container>
            <FooterSection />
        </Grid>
    )
}

const useStyles = makeStyles(theme => ({
    firstDiv: {
        backgroundImage: `url(${ImgPattern})`,
        backgroundSize: 'cover',
        paddingTop: '5rem',
    },
    content: {
        marginTop: '2rem'
    },
    link: {
    },
    listdiv: {
        margin: 'auto',
        width: '50%',
        padding: '10px',
    },
    formGrid: {
        paddingLeft: '8rem',
        paddingRight: '8rem',
    },
    item: {
        marginBottom: '8rem'
    },
    textField: {
        marginBottom: '1rem',
        backgroundColor: 'white'
    },
    list: {
        marginTop: '2rem'
    },
    listText: {
        marginLeft: '1em'
    },
    button: {
        backgroundColor: '#434c57',
        color: 'white',
        marginBottom: '5%',
    }
}));