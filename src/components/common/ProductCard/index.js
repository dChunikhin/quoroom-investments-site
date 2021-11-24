import styles from './index.styles'
import React from "react"
import {Box, Card, CardContent, CardMedia, Typography, Button, Grid, Container, useMediaQuery} from "@mui/material";
import {ButtonWithArrow, TitledText, TextWithImage, Slider} from "../index"
import Img1 from "assets/slider_1.jpg"
import HouseIcon from "assets/house.svg"
import PiceIcon from "assets/price.svg"


const ProductCard = ({data}) => {

    const classes = styles();
    const isLg = useMediaQuery((theme) => theme.breakpoints.down('lg'));

    console.log(data);

    return(
        <Box className={classes.root}>
            <Container className={classes.container}>
                <Grid container alignItems={"stretch"}>
                    <Grid item md={8} sm={12}>
                        <Slider extraClasses={{ root: classes.productGallery }}>
                            <img src={Img1} alt=""/>
                            <img src={Img1} alt=""/>
                            <img src={Img1} alt=""/>
                            <img src={Img1} alt=""/>
                            <img src={Img1} alt=""/>
                        </Slider>
                    </Grid>
                    <Grid item md={4} sm={12} container>
                        <Box className={classes.productInformation}>
                            <TitledText
                                extraClasses={{ root: classes.row, title: classes.title }}
                                title={"Стр. Площадь"}
                            >
                                140 м
                            </TitledText>
                            <TitledText
                                extraClasses={{ root: classes.row, title: classes.title }}
                                title={"Жилая площадь"}
                            >
                                145 м
                            </TitledText>
                            <TitledText
                                extraClasses={{ root: classes.row, title: classes.title }}
                                title={"Габариты дома"}
                            >
                                12,2 х 9,7 м
                            </TitledText>
                            <TitledText
                                extraClasses={{ root: classes.row, title: classes.title }}
                                title={"Кол-во спален"}
                            >
                                3
                            </TitledText>
                            <TitledText
                                extraClasses={{ root: classes.row, title: classes.title }}
                                title={"Кол-во спален"}
                            >
                                2
                            </TitledText>
                            <TitledText
                                extraClasses={{ root: classes.row, title: classes.title }}

                                title={"Кол-во спален"}
                            >
                                1
                            </TitledText>

                            <TextWithImage
                                extraClasses={{ root: classes.range }}
                                url={HouseIcon}
                                title={"“под ключ” 3 месяца"}
                            />

                            <TextWithImage
                                extraClasses={{ root: classes.price }}
                                url={PiceIcon}
                                title={"от $300 000 "}
                            />
                            <ButtonWithArrow text={"Получить консультацию"}/>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
export default ProductCard