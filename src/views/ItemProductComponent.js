import React from 'react';
import { Router, Route, Switch, Link } from 'react-router-dom';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import StarComponent from './StarComponent';

{/* <ItemProductComponent link={'/products'} name={'Dummy Text'} star={'4'} starSize={'1em'} price={'Rp 300.000'} product={ImgProducts3} /> */ }
export default function ItemProductComponent(props) {
    const classes = useStyles();
    return (
        <div className={classes.firstDiv}>
            <Link to={props.link} style={{ textDecoration: 'none' }}>
                {/* <Button> */}
                <img className={classes.imgProducts} src={props.product} />
                {/* </Button> */}
                <Typography variant="h6" gutterBottom align='center'>
                    {props.name} </Typography>
                <StarComponent star={props.star} size={props.starSize} />
                <Typography variant="subtitle1" gutterBottom align='center'>
                    {props.price} </Typography>
            </Link>
        </div>
    )
}

const useStyles = makeStyles(theme => ({
    imgProducts: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '1px',
        marginTop: '50rem',
        '&:hover': {
            background: "#00000",
        },
    },
    title: {
        marginTop: '5%'
    },
    imgProducts: {
        width: '100%'
    },
    firstDiv: {
        margin: '1em'
    }
}));