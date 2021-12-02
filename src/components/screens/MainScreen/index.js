import styles from './index.styles';

import React from "react";
import { Typography, Container, Box, Button } from "@mui/material";

import {ButtonWithArrow, PhoneButton} from "../../common";

import information from "data/firstScreen.json"


const MainScreen = () => {
    const classes = styles();
    return (
        <Box className={classes.root}>
            <Container>
                <Typography variant={'h1'} className={classes.title}>
                    {information.title}
                </Typography>

                <Typography variant={'subtitle1'} className={classes.description}>
                    {information.description}
                </Typography>

                <ButtonWithArrow text={"Узнать подробности"}/>

            </Container>
        </Box>
    )
}

export default  MainScreen;