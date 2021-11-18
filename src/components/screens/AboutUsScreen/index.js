import styles from './index.styles'
import React from "react"
import {Box, Grid, Typography, Container, Button} from "@mui/material"
import AboutImg from "assets/about_img.png"
import arrowRight from "../../../assets/right_arrow.png";
import {ButtonWithArrow, ScreenLayout} from "../../common";
import clsx from "clsx";

const AboutUsScreen = () => {
    const classes = styles();
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
                                Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому,
                                <br/>
                                <br/>
                                Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому,
                            </Typography>


                            <Grid container className={classes.advantages} spacing={2}>
                                <Grid item sm={6}>
                                    <Typography variant="subtitle1" className={classes.advantages__title}>
                                        Большой опыт в строительстве
                                    </Typography>
                                </Grid>
                                <Grid item sm={6}>
                                    <Typography variant="subtitle1" className={classes.advantages__title}>
                                        10 лет на рынке частных домов в провинции
                                    </Typography>
                                </Grid>
                                <Grid item sm={6}>
                                    <Typography variant="subtitle1" className={classes.advantages__title}>
                                        Кидаем сразу же как только можем
                                    </Typography>
                                </Grid>
                                <Grid item sm={6}>
                                    <Typography variant="subtitle1" className={classes.advantages__title}>
                                        Денис не платит бабки своим рабам
                                    </Typography>
                                </Grid>
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