import styles from './index.styles'
import React from "react";
import {Box, Container, Grid, Link, Typography} from "@mui/material"
import { Link as RouterLink, useLocation } from 'react-router-dom';

import {BreadcrumbsLayout, NewCard, ScreenLayout} from "../../common";
import ImgTest1 from "../../../assets/new_1.png";
import ImgTest2 from "../../../assets/new_2.png";
import articles from 'data/articles';

const NewsPage = ({ route }) => {
    const classes = styles();
    const { url } = useLocation();

    return (
        <Box className={classes.root}>
            <BreadcrumbsLayout title={"Новости Компании"} variantTitle={"h2"}>
                <Link underline="hover" color="inherit" href="/">
                    Главная
                </Link>
                <Typography color="text.primary">Новости</Typography>
            </BreadcrumbsLayout>
            <ScreenLayout
                extraClasses={{ root: classes.screenLayout}}
            >
                <Container>
                    <Grid container spacing={2}>
                        {articles.map((article) => {
                            return (
                                <Grid item sm={12} md={6}>
                                    <RouterLink to={route.path + `/${article.id}`}>
                                        <NewCard
                                            extraClasses={{ title: classes.title, date: classes.date}}
                                            src={ImgTest1}
                                            title={article.title}
                                            description={article.description}
                                            date={article.publishDate}
                                        />
                                    </RouterLink>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Container>
            </ScreenLayout>
        </Box>
    )
}

export default NewsPage;