import styles from './index.styles'
import React from "react";
import {Box, Container, Link, Breadcrumbs, Typography} from "@mui/material";
import Arrow from "assets/breadcrumbs_arrow.svg"

const BreadcrumbsLayout = ({title, variantTitle, children}) => {
    const classes = styles()
    return (
        <Box className={classes.root}>
            <Container>
                <Breadcrumbs
                    separator={
                        <img src={Arrow} alt=""/>
                    }
                    aria-label="breadcrumb">
                    {children}
                </Breadcrumbs>
                <Typography
                    variant={variantTitle}
                    className={classes.title}
                >
                    {title}
                </Typography>
            </Container>
        </Box>
    )
}

export default BreadcrumbsLayout;