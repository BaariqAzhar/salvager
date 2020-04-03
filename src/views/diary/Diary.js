import React, { useState, useEffect } from 'react';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import NavbarSection from '../NavbarSection'
import DiaryListSection from './DiaryListSection';
import FooterSection from '../home/FooterSection';
import { Container } from '@material-ui/core';

export default function Diary() {
    const classes = useStyles();

    return (
        <div>
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
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    diaryTitle: {
        alignItems: 'center',
        marginTop: '1rem'
    }
}));
