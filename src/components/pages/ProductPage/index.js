import styles from './index.styles'
import React from "react";
import { Link } from 'react-router-dom'
import { Container, Typography} from "@mui/material";
import {BreadcrumbsLayout, ProductCard} from "../../common";
import {CompleteSetScreen, ContactUsScreen, PlansScreen} from "../../screens";

const ProductPage = () => {
    const classes = styles();
    return (
        <div className={classes.root}>
            <BreadcrumbsLayout title={"Проект “Таунхаус”"} variantTitle={"h2"}>
                <Link to="/">
                    Главная
                </Link>
                <Link to ="/">
                    Каталог проектов
                </Link>
                <Typography color="text.primary">Проект “Таунхаус”</Typography>
            </BreadcrumbsLayout>
            <ProductCard/>
            <PlansScreen/>
            <CompleteSetScreen/>
            <ContactUsScreen/>
        </div>
    )
}

export default ProductPage;