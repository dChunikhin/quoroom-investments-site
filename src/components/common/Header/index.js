import styles from './index.styles';
import React from "react";
import Logo from "../../../assets/logo.png";
import MenuIcon from "../../../assets/menu_ico.svg";
import PhoneIcon from "../../../assets/telephone-call.svg";
import {Box, Container, Typography} from "@mui/material";
import {PhoneButton} from "../index";

const Header = () => {
    const classes = styles();
    return (
        <Box className={classes.root}>
            <Container className={classes.container}>
                <Box className={classes.menu}>
                    <button className={classes.menu__button}>
                        <img src={MenuIcon} alt=""/>
                    </button>
                </Box>

                <Box className={classes.logo}>
                    <img src={Logo} alt="" className={classes.logo__img}/>
                </Box>

                <Box className={classes.phone}>
                    <img src={PhoneIcon} className={classes.phone__icon} alt=""/>
                    <Typography className={classes.phone__number} variant="subtitle1">+38 (050) 690-04-40</Typography>
                </Box>

                <PhoneButton/>

            </Container>
        </Box>
    )
}

export default Header;