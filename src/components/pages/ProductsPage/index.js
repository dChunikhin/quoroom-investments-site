import styles from './index.styles'
import React from "react";
import {Grid, Container, Typography} from "@mui/material";
import {BreadcrumbsLayout, ProductPreview, ScreenLayout} from "../../common";
import {ContactUsScreen} from "../../screens";

import {Link, useLocation, useRouteMatch} from "react-router-dom";
import * as url from "url";

const ProductsPage = () => {
    const classes = styles();

    const {url} = useRouteMatch();
    const items = [
        {
            id: "1",
            subtitle: "Одноэтажный каркасный дом",
            title: "Проект “Таунхаус”",
            area: "140 м",
            dimensions: "14,6 х 10,5 м",
            livingSpace: "98,8 м",
            bedrooms: "2",
            range: "“под ключ” 3 месяца",
            price: "от $300 000 "
        },
        {
            id: "2",
            subtitle: "Одноэтажный каркасный дом",
            title: "Проект “Таунхаус”",
            area: "140 м",
            dimensions: "14,6 х 10,5 м",
            livingSpace: "98,8 м",
            bedrooms: "2",
            range: "“под ключ” 3 месяца",
            price: "от $300 000 "
        },
        {
            id: "3",
            subtitle: "Одноэтажный каркасный дом",
            title: "Проект “Таунхаус”",
            area: "140 м",
            dimensions: "14,6 х 10,5 м",
            livingSpace: "98,8 м",
            bedrooms: "2",
            range: "“под ключ” 3 месяца",
            price: "от $300 000 "
        },
        {
            id: "4",
            subtitle: "Одноэтажный каркасный дом",
            title: "Проект “Таунхаус”",
            area: "140 м",
            dimensions: "14,6 х 10,5 м",
            livingSpace: "98,8 м",
            bedrooms: "2",
            range: "“под ключ” 3 месяца",
            price: "от $300 000 "
        },
    ];

    const renderProduct = (product) => (
        <Grid item sm={12} md={6} xs={12}>
            <Link to={url + `/${product.id}`} className={classes.link}>
                <ProductPreview data={product}/>
            </Link>
        </Grid>
    )



    return (
        <div className={classes.root}>
            <BreadcrumbsLayout title={"Каталог проектов"} variantTitle={"h2"}>
                <Link underline="hover" color="inherit" href="/">
                    Главная
                </Link>
                <Typography color="text.primary">Проекты</Typography>
            </BreadcrumbsLayout>
            <ScreenLayout extraClasses={{ root: classes.screenLayout}}>
                <Container>
                    <Grid container spacing={2}>
                        {items.map(renderProduct)}
                    </Grid>
                </Container>
            </ScreenLayout>
            <ContactUsScreen/>
        </div>
    )
}

export default ProductsPage;