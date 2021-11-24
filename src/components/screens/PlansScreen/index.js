import styles from "./index.styles"
import React from "react"
import {Box, Typography, Grid, Container} from "@mui/material"
import {ScreenLayout} from "../../common";
import img1 from "assets/plan_img1.jpg"
import img2 from "assets/plan_img2.jpg"

const PlansScreen = () => {
    const classes = styles();

    return(
        <Box className={classes.root}>
            <ScreenLayout>
                <Container>
                    <Typography variant={"h2"} className={classes.title}>
                        Планировки
                    </Typography>
                    <Grid container>
                        <Grid item md={12} sm={12} xs={12} lg={6}>
                            <img className={classes.image} src={img1} alt=""/>
                        </Grid>
                        <Grid item md={12} sm={12} xs={12} lg={6}>
                            <img className={classes.image} src={img2} alt=""/>
                        </Grid>
                    </Grid>
                </Container>
            </ScreenLayout>
        </Box>
    )
}

export default PlansScreen