import styles from './index.styles'
import React from "react"
import {Box, Typography, Container, Grid} from "@mui/material"
import arrowRight from "../../../assets/right_arrow.png";
import {ButtonWithArrow, NewCard, ProductPreview, ScreenLayout} from "../../common";

import {Link, useLocation, useRouteMatch} from "react-router-dom";
import * as url from "url";

import products from 'data/products';

const ProductScreen = () => {
    const classes = styles();

    const {url} = useRouteMatch();

    const renderProduct = (product) => (
        <Grid item sm={12} md={6} xs={12}>
            <Link to={url + `/${product.id}`} className={classes.link}>
                <ProductPreview data={product}/>
            </Link>
        </Grid>
    )

    return(
        <ScreenLayout extraClasses={{root:classes.root}}>
            <Container>
                <Box className={classes.topSection}>
                    <Typography variant="h2" className={classes.title}>Варианты Таунхаусов</Typography>
                    <ButtonWithArrow
                        extraClasses={{ root: classes.buttonTop}}
                        text={"Смотреть больше"}
                    />
                </Box>
                <Grid container spacing={2}>
                    {products.map(renderProduct)}
                </Grid>
                <ButtonWithArrow
                    extraClasses={{ root: classes.buttonBottom}}
                    text={"Смотреть больше"}
                />
            </Container>
        </ScreenLayout>
    )
}

export default ProductScreen
