import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import '../../assets/css/home.css'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ItemProductComponent from '../ItemProductComponent';

export default function OurproductsSection() {
  const classes = useStyles();
  const [products, setProducts] = useState([])

  async function fetchProducts() {
    const res = await fetch("https://salvagerapi.salvagerindonesia.com/api/v1/products/?format=json")
    const products = await res.json()
    setProducts(products)
    console.log(products)
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  let productList = products.map((product) => {
    const link = "/product/" + product.id
    const imageLink = "https://salvagerapi.salvagerindonesia.com" + product.product_images[0]
    const starSize = '1em'

    console.log(imageLink)
    return <Grid item xs={6} sm={2}>
      <ItemProductComponent
        starDisplay={'block'}
        name={product.name}
        star={product.rating}
        starSize={starSize}
        price={product.price}
        product={imageLink}
        link={link} />
    </Grid>
  })

  productList = productList.slice(Math.max(productList.length - 6, 0))

  return (
    <div>
      <Typography className={classes.title} variant="h3" gutterBottom align="center">
        Our Products </Typography>

      <Grid container>
        {productList}
      </Grid>
    </div >
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      Button: {
        textTransform: 'none'
      },
    },
  },
  viewButton: {
    // textTransform: 'none',
    // margin: '0%'
  },
  title: {
    marginTop: '5%'
  },
  imgProducts: {
    width: '100%'
  },
}));
