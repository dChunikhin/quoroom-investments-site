import styles from './index.styles'
import React from "react"
import {Box, Card, CardActions, CardContent, CardMedia, Typography, Button, Grid, useMediaQuery} from "@mui/material";
import ProductImg from "assets/product_img.jpg"
import HouseIcon from "assets/house.svg"
import PiceIcon from "assets/price.svg"
import {ButtonWithArrow, TitledText, TextWithIcon} from "../index"


const ProductCard = () => {

    const classes = styles();
    const isLg = useMediaQuery((theme) => theme.breakpoints.down('lg'));

    return(
        <Box>
            <Card className={classes.root}>
                <CardMedia
                    className={classes.imgWrapper}
                    component="img"
                    height="390"
                    image={ProductImg}
                    alt="green iguana"
                />
                <CardContent
                    classes={{root: classes.cardInformation}}>
                    <Typography variant={"subtitle2"} className={classes.subtitle}>Одноэтажный каркасный дом</Typography>
                    <Typography className={classes.title} gutterBottom variant="h3" component="div">
                        Проект “Таунхаус”
                    </Typography>
                    <Grid container spacing={2} className={classes.houseInfoWrapper}>
                        <Grid item xs={6} sm={6} md={6} lg={6}>
                            <TitledText title={"Площадь"} inline={isLg ? false : true} extraClasses={{ root: classes.infoText}}>
                                140м
                            </TitledText>
                        </Grid>
                        <Grid item xs={6} sm={6} md={6} lg={6}>
                            <TitledText title={"Габариты"} inline={isLg ? false : true} extraClasses={{ root: classes.infoText }}>
                                14,6х10,5м
                            </TitledText>
                        </Grid>
                        <Grid item xs={6} sm={6} md={6} lg={6}>
                            <TitledText title={"Жилая"} inline={isLg ? false : true} extraClasses={{ root: classes.infoText }}>
                                97.4м
                            </TitledText>
                        </Grid>
                        <Grid item xs={6} sm={6} md={6} lg={6}>
                            <TitledText title={"Спален"} inline={isLg ? false : true} extraClasses={{ root: classes.infoText }}>
                                2
                            </TitledText>
                        </Grid>
                    </Grid>
                    <hr/>
                    <Grid container className={classes.TextWithIconWrapper}>
                        <Grid item sm={12} md={6}>
                            <TextWithIcon url={HouseIcon}>
                                “под ключ” 3 месяца
                            </TextWithIcon>
                        </Grid>
                        <Grid item sm={12} md={6}>
                            <TextWithIcon url={PiceIcon}>
                                от $300 000
                            </TextWithIcon>
                        </Grid>
                    </Grid>
                    <ButtonWithArrow
                        text={"Получить консультацию"}
                    />
                </CardContent>

            </Card>
        </Box>
    )
}
export default ProductCard