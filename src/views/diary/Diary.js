import React, { useState, useEffect } from 'react';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import NavbarSection from '../NavbarSection'
import DiaryListSection from './DiaryListSection';
import FooterSection from '../home/FooterSection';
import { Container } from '@material-ui/core';

import ImgPattern from '../../assets/img/pattern2.png'

export default function Diary() {
    window.scrollTo(0, 0)
    const classes = useStyles();

    return (
        <div className={classes.firstDiv}>
            <Container>
                <NavbarSection theme='dark' />
                <Typography variant="h3" align='center'>Diary</Typography>
                <DiaryListSection />
            </Container>
            <FooterSection />
        </div>
    )
}

const useStyles = makeStyles(theme => ({
    firstDiv: {
        backgroundImage: `url(${ImgPattern})`,
        backgroundSize: 'cover',
        paddingTop: '5rem',
    },
    diaryTitle: {
        alignItems: 'center',
        marginTop: '1rem'
    }
}));
