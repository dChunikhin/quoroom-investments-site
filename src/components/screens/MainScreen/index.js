import styles from './index.styles';

import React from "react";
import { Typography, Container, Box, Button } from "@mui/material";

import arrowRight from "assets/right_arrow.png";
import {ButtonWithArrow, PhoneButton} from "../../common";


const MainScreen = () => {
    const classes = styles();
    return (
        <Box className={classes.root}>
            <Container>
                <Typography variant={'h1'} className={classes.title}>
                    4 таунхауса  уже ожидают<br/>своих покупателей!
                </Typography>

                <Typography variant={'subtitle1'} className={classes.description}>
                    Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.
                </Typography>

                <ButtonWithArrow text={"Узнать подробности"}/>

            </Container>
        </Box>
    )
}

export default  MainScreen;