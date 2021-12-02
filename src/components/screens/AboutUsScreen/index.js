import styles from './index.styles'
import React from "react"
import {Box, Grid, Typography, Container, Button} from "@mui/material"
import AboutImg from "assets/about_img.png"
import {ButtonWithArrow, ScreenLayout} from "../../common";

import aboutCompany from "data/aboutCompany.json"

const AboutUsScreen = () => {
    const classes = styles();
    console.log(aboutCompany);
    return (
        <ScreenLayout extraClasses={{root:classes.root}}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item sm={12} xs={12} md={6}>
                        <Box className={classes.wrapImg}>
                            <img className={classes.img} src={AboutImg} alt=""/>
                        </Box>
                    </Grid>
                    <Grid item sm={12} xs={12} md={6}>
                        <Box className={classes.about}>
                            <Typography className={classes.title} variant="h2">
                                Про Компанию
                            </Typography>
                            <Typography className={classes.description} variant="body1">
                                {aboutCompany.description}
                            </Typography>
                            <Grid container className={classes.advantages} spacing={2}>
                                {aboutCompany.advantages.map((advantage) => {
                                    return (
                                        <Grid item sm={6}>
                                            <Typography variant="subtitle1" className={classes.advantages__title}>
                                                {advantage}
                                            </Typography>
                                        </Grid>
                                    )
                                })}
                            </Grid>
                            <ButtonWithArrow
                                text={"Узнать по подробней"}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </ScreenLayout>
    )
}

export default AboutUsScreen