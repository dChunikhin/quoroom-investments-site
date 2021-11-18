import styles from './index.styles'
import React from "react"
import {Box, Typography, Container, Grid} from "@mui/material"
import arrowRight from "../../../assets/right_arrow.png";
import {ButtonWithArrow, ProductCard, ScreenLayout} from "../../common";


const ProductScreen = () => {
    const classes = styles();
    return(
        <ScreenLayout extraClasses={{root:classes.root}}>
            <Container>
                <Box className={classes.topSection}>
                    <Typography variant="h2" className={classes.title}>Варианты Таунхаусов</Typography>
                    <ButtonWithArrow text={"Смотреть больше"}/>
                </Box>
                <Grid container spacing={2}>
                    <Grid item sm={12} md={6}>
                        <ProductCard/>
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <ProductCard/>
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <ProductCard/>
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <ProductCard/>
                    </Grid>
                </Grid>
            </Container>
        </ScreenLayout>
    )
}

export default ProductScreen
