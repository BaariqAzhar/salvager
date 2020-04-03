import React from 'react';
import './Products2.css';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from '@material-ui/core';
import { emphasize } from "@material-ui/core/styles/colorManipulator";

import NavbarSection from '../NavbarSection'

import ImgPattern from '../../assets/img/pattern2.png'
import ImgProducts1 from '../../assets/img/p1.png'
import ImgProducts2 from '../../assets/img/p2.png'
import ImgProducts3 from '../../assets/img/p3.png'
import ImgProducts4 from '../../assets/img/p4.png'
import ImgProducts5 from '../../assets/img/p5.png'
import ImgStar5 from '../../assets/img/star5.png'
import ImgStar4 from '../../assets/img/star4.png'
import ImgStar3 from '../../assets/img/star3.png'

class Products2 extends React.Component {

    render() {
        function ItemProduct(props) {
            const Star = props.star;
            let StarImg;
            switch (props.star) {
                case '5':
                    StarImg = ImgStar5
                    break;
                case '4':
                    StarImg = ImgStar4
                    break;
                case '3':
                    StarImg = ImgStar3
                    break;
            }
            return (
                <div>
                    <Button className='button' variant="contained" color="primary">
                        Primary
                    </Button>
                    <Link to={props.link} style={{ textDecoration: 'none' }}>
                        <img src={props.product} />
                        <Typography variant="h4" gutterBottom align='center'>
                            {props.name} </Typography>
                        <img className="imgStar" src={StarImg} />
                        <Typography variant="subtitle1" gutterBottom align='center'>
                            {props.price} </Typography>
                    </Link>
                </div>
            )
        }
        return (
            <div >
                <Container>
                    <NavbarSection theme='dark' />
                    <Grid container>
                        <Grid item xs={6} sm={4}>
                            <ItemProduct
                                name='Product Text'
                                star='5'
                                price='Rp 300.000'
                                product={ImgProducts1}
                                link="/product1" />
                        </Grid>
                        <Grid item xs={6} sm={4}>
                            <p className='cobaCoba'>coba coba</p>
                        </Grid>
                        <Grid item xs={6} sm={4}>

                        </Grid>
                    </Grid>
                </Container>
            </div>
        );
    }
}

export default Products2;