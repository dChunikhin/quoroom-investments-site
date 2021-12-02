import styles from './index.styles'
import React from "react"
import {Box, Card, CardContent, CardMedia, Typography, Button, Grid, useMediaQuery} from "@mui/material";
import ProductImg from "assets/product_img.jpg"
import HouseIcon from "assets/house.svg"
import PiceIcon from "assets/price.svg"
import {ButtonWithArrow, TitledText, TextWithImage} from "../index"


const ProductPreview = ({data}) => {

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
                    <Typography variant={"subtitle2"} className={classes.subtitle}>{data?.subtitle}</Typography>
                    <Typography className={classes.title} gutterBottom variant="h3" component="div">
                        {data?.title}
                    </Typography>
                    <Box className={classes.houseInfoWrapper}>
                        <Grid container spacing={2}>
                            <Grid item xs={6} sm={6} md={6} lg={6}>
                                <TitledText title={"Площадь"} inline={isLg ? false : true} extraClasses={{ text: classes.bold, title: classes.subtle}}>
                                    {data?.square}
                                </TitledText>
                            </Grid>
                            <Grid item xs={6} sm={6} md={6} lg={6}>
                                <TitledText title={"Габариты"} inline={isLg ? false : true} extraClasses={{ text: classes.bold, title: classes.subtle }}>
                                    {data?.dimensions}
                                </TitledText>
                            </Grid>
                            <Grid item xs={6} sm={6} md={6} lg={6}>
                                <TitledText title={"Жилая"} inline={isLg ? false : true} extraClasses={{ text: classes.bold, title: classes.subtle }}>
                                    {data?.living}
                                </TitledText>
                            </Grid>
                            <Grid item xs={6} sm={6} md={6} lg={6}>
                                <TitledText title={"Спален"} inline={isLg ? false : true} extraClasses={{ text: classes.bold, title: classes.subtle }}>
                                    {data?.bedrooms}
                                </TitledText>
                            </Grid>
                        </Grid>
                    </Box>
                    <hr/>
                    <Box className={classes.textWithIconWrapper}>
                        <Grid container>
                            <Grid item xs={12} sm={6} md={6}>
                                <TextWithImage
                                    url={HouseIcon}
                                    title={data?.range}
                                    extraClasses={{
                                        root: classes.textWithIcon,
                                        text: classes.range
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={6}>
                                <TextWithImage
                                    extraClasses={{
                                        root: classes.textWithIcon,
                                        text: classes.price
                                    }}


                                    url={PiceIcon}
                                    title={data?.price}
                                />
                            </Grid>
                        </Grid>
                    </Box>

                </CardContent>
                <ButtonWithArrow extraClasses={{
                    root: classes.button
                }}
                    text={"Получить консультацию"}
                />
            </Card>
        </Box>
    )
}
export default ProductPreview