import styles from './index.styles'
import React from "react"
import {Box, Typography, Container, Grid} from "@mui/material"
import arrowRight from "../../../assets/right_arrow.png";
import {ButtonWithArrow, ProductPreview, ScreenLayout} from "../../common";


const ProductScreen = () => {
    const classes = styles();
    return(
        <ScreenLayout extraClasses={{root:classes.root}}>
            <Container>
                <Box className={classes.topSection}>
                    <Typography variant="h2" className={classes.title}>Варианты Таунхаусов</Typography>
                    <ButtonWithArrow
                        extraClasses={{ root: classes.buttonTop}}
                        text={"Смотреть больше"}
                    />
                </Box>
                <Grid container spacing={2}>
                    <Grid item sm={12} md={6} xs={12}>
                        <ProductPreview/>
                    </Grid>
                    <Grid item sm={12} md={6} xs={12}>
                        <ProductPreview/>
                    </Grid>
                    <Grid item sm={12} md={6} xs={12}>
                        <ProductPreview/>
                    </Grid>
                    <Grid item sm={12} md={6} xs={12}>
                        <ProductPreview/>
                    </Grid>
                </Grid>
                <ButtonWithArrow
                    extraClasses={{ root: classes.buttonBottom}}
                    text={"Смотреть больше"}
                />
            </Container>
        </ScreenLayout>
    )
}

export default ProductScreen
