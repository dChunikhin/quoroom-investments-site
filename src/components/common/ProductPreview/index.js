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

    console.log(data);

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
                    <Grid container spacing={2} className={classes.houseInfoWrapper}>
                        <Grid item xs={6} sm={6} md={6} lg={6}>
                            <TitledText title={"Площадь"} inline={isLg ? false : true} extraClasses={{ root: classes.infoText}}>
                                {data?.area}
                            </TitledText>
                        </Grid>
                        <Grid item xs={6} sm={6} md={6} lg={6}>
                            <TitledText title={"Габариты"} inline={isLg ? false : true} extraClasses={{ root: classes.infoText }}>
                                {data?.dimensions}
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
                        <Grid item xs={12} sm={6} md={6}>
                            <TextWithImage
                                url={HouseIcon}
                                title={"“под ключ” 3 месяца"}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <TextWithImage
                                url={PiceIcon}
                                title={"от $300 000"}
                            />
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
export default ProductPreview