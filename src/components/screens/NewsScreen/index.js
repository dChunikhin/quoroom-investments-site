import styles from './index.styles'
import React from "react"
import {Box, Button, Container, Grid, Typography} from "@mui/material"

import { Link as RouterLink, useLocation } from 'react-router-dom';

import articles from 'data/articles';


import ImgTest1 from "assets/new_1.png"
import ImgTest2 from "assets/new_2.png"


import {ButtonWithArrow, NewCard, ScreenLayout} from "../../common"
const NewsScreen = ( {route}) => {
    const classes = styles();
    const { url } = useLocation();
    return (
        <ScreenLayout extraClasses={{root:classes.root}}>
            <Container>
                <Box className={classes.topSection}>
                    <Typography variant="h2" className={classes.title}>Новости компании</Typography>
                    <ButtonWithArrow
                        text={"Смотреть все новости"}
                        extraClasses={{root:classes.buttonTop}}
                    />
                </Box>

                    <Box>
                        <Grid container spacing={2}>
                            {articles.map((article) => {
                                return (
                                    <Grid item sm={12} md={6}>
                                        <RouterLink className={classes.link} to={ `news/${article.id}`}>
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
                        <ButtonWithArrow
                            text={"Смотреть все новости"}
                            extraClasses={{root:classes.buttonBottom}}
                        />
                    </Box>

            </Container>
        </ScreenLayout>
    )
}
export default NewsScreen