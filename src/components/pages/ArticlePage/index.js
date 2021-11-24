import styles from './index.styles'
import React from "react";
import {Link as RouterLink, useParams} from 'react-router-dom';
import {Box, Container, Grid, Link, Typography} from "@mui/material"
import {BreadcrumbsLayout, NewCard, ScreenLayout} from "../../common";
import ArticleImg from "assets/gallery_test.png"

import articles from 'data/articles';
import latestArticles from 'data/latestArticles';
import ImgTest1 from "../../../assets/new_1.png";

const ArticlePage = ({ route }) => {
    const classes = styles();
    const { articleId } = useParams();

    // TODO: Connect with server
    const article = articles.find((article) => article.id === articleId)

    return (
        <Box className={classes.root}>
            <BreadcrumbsLayout title={"Строительство нового Таунхауса не за горами"} variantTitle={"h2"}>
                <Link underline="hover" color="inherit" href="/">
                    Главная
                </Link>
                <Link underline="hover" color="inherit" href="/">
                    Новости
                </Link>
                <Typography color="text.primary">
                    Строительство нового Таунхауса не за горами
                </Typography>
            </BreadcrumbsLayout>
            <ScreenLayout
                extraClasses={{ root: classes.screenLayout}}
            >
            <Container>
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={6} md={8} lg={8}>
                        <Typography
                            className={classes.publishDate}
                        >
                            {article.publishDate}
                        </Typography>

                        <img
                            className={classes.img}
                            src={ArticleImg}
                            alt=""
                        />

                        <Typography
                            variant={"h4"}
                            className={classes.title}
                        >
                            {article.title}
                        </Typography>
                        <Typography
                            variant={"body1"}
                            className={classes.text}
                        >{article.description}
                        </Typography>

                        <Typography
                            variant={"body1"}
                            className={classes.text}
                        >{article.content}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <Typography
                            variant={"h4"}
                            className={classes.latestNewsTitle}
                        >
                            Последние новости
                        </Typography>
                        {latestArticles.map((article) => {
                            return (
                                <RouterLink
                                    className={classes.link}
                                    to={route.path.replace(':articleId', article.id)}>
                                    <NewCard
                                        variantTitle={"h5"}
                                        extraClasses={{
                                            root: classes.latestArticle,
                                            img: classes.latestArticleImg,
                                            title: classes.latestArticleTitle,
                                            description: classes.latestArticleDescription,
                                            wrapperText: classes.latestArticleWrapperText,
                                            date: classes.latestArticleDate
                                        }}
                                        src={ImgTest1}
                                        title={article.title}
                                        description={article.description}
                                        date={article.publishDate}
                                    />
                                </RouterLink>
                            )
                        })}
                    </Grid>
                </Grid>
            </Container>
            </ScreenLayout>
        </Box>
    )
}

export default ArticlePage;