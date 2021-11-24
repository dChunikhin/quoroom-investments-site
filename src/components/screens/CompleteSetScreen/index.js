import styles from './index.styles'
import React from "react"
import {Box, Container, Typography, Grid} from "@mui/material";
import {CompleteSetCard, ScreenLayout} from "../../common";


const CompleteSetScreen = () => {
    const classes = styles();
    return(
        <Box className={classes.root}>
            <ScreenLayout>
                <Container>
                    <Typography variant={"h2"} className={classes.title}>
                        Комплектация дома “Таунхаус у Водника”
                    </Typography>
                    <Typography variant={"body1"} className={classes.description}>
                        Мы сделали комплектацию дома максимально понятной и прозрачной.
                        "Тёплый контур" – это готовый дом на фундаменте со всеми материалами и внешней отделкой
                        <br/>
                        <br/>
                        Что входит в комплектацию:
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={6} lg={3}>
                            <CompleteSetCard/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={3}>
                            <CompleteSetCard/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={3}>
                            <CompleteSetCard/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={3}>
                            <CompleteSetCard/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={3}>
                            <CompleteSetCard/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={3}>
                            <CompleteSetCard/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={3}>
                            <CompleteSetCard/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={3}>
                            <CompleteSetCard/>
                        </Grid>
                    </Grid>
                </Container>
            </ScreenLayout>
        </Box>
    )
}

export default CompleteSetScreen