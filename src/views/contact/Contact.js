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

export default function Contact() {
    const classes = useStyles();

    return (
        <Grid className={classes.firstDiv}>
            <Container>
                <NavbarSection theme='dark' />
                <Grid className={classes.content} container spacing={4}>
                    <Grid className={classes.listdiv} xs={12} sm={12}>
                        <List
                            className={classes.list}
                            alignItems="center"
                            justify="center"
                        >
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar src={ImgWhatsapp} />
                                </ListItemAvatar>
                                <ListItemText primary="+6232234324234" />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar src={ImgIg} />
                                </ListItemAvatar>
                                <ListItemText primary="salvager" />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar src={ImgTokopedia} />
                                </ListItemAvatar>
                                <ListItemText primary="salvager" />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="info@salvager.com" />
                            </ListItem>
                        </List>
                        <Typography className={classes.contact} variant="h3" gutterBottom align="center"></Typography>
                    </Grid>
                    <Grid className={classes.formGrid} item xs={12} sm={12}>
                        <form className={classes.form} noValidate autoComplete="off">
                            <TextField
                                id="name"
                                label='Name'
                                className={classes.textField}
                                placeholder="Write your message here..."
                                fullWidth
                                variant="filled"
                            />
                            <TextField
                                id="email"
                                label='Email'
                                className={classes.textField}
                                placeholder="Write your message here..."
                                fullWidth
                                variant="filled"
                            />
                            <TextField
                                id="phone"
                                label='Phone Number'
                                className={classes.textField}
                                placeholder="Write your message here..."
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
                        <Button variant="contained" color="primary" cir>Submit</Button>
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
    },
    content: {
        marginTop: '2rem'
    },
    link: {
    },
    listdiv: {
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
        color: 'white'
    }
}));