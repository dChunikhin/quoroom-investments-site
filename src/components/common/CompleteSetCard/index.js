import styless from "./index.styles"
import React from "react"
import {Box, Typography} from "@mui/material"
import Img from "assets/tractor.png"
import CheckImg from "assets/check_icon.svg"

const CompleteSetCard = () => {
    const classes = styless();
    return(
        <Box className={classes.root}>
            <Box className={classes.checkImgWrapper}>
                <img className={classes.checkImg} src={CheckImg} alt=""/>
            </Box>
            <Box className={classes.imgWrapper}>
                <img className={classes.img} src={Img} alt=""/>
            </Box>
            <Typography variant="body2">
                "Нулевой цикл" и подготовка участка
            </Typography>
        </Box>
    )
}

export default CompleteSetCard