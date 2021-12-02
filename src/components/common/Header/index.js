import styles from './index.styles';
import React from "react";
import Logo from "../../../assets/logo.png";
import MenuIcon from "../../../assets/menu_ico.svg";
import PhoneIcon from "../../../assets/telephone-call.svg";
import {Box, Container, Typography} from "@mui/material";
import {PhoneButton} from "../index";
import {NavLink} from "react-router-dom";

const Header = () => {

    const classes = styles();


    return (
        <Box className={classes.root}>
            <Container className={classes.container}>
                <ul className={classes.menu}>
                    <li>
                        <NavLink className={classes.link} activeClassName={classes.activeLink} to={'/home'}>Главная</NavLink>
                    </li>
                    <li>
                        <NavLink className={classes.link} activeClassName={classes.activeLink} to={'/products'}>Проекты</NavLink>
                    </li>
                    <li>
                        <NavLink className={classes.link} activeClassName={classes.activeLink} to={'/News'}>Новости</NavLink>
                    </li>
                    <li>
                        <NavLink className={classes.link} to={'/'}>Контакты</NavLink>
                    </li>
                </ul>
                <button className={classes.menu__button}>
                    <img src={MenuIcon} alt=""/>
                </button>

                <Box className={classes.logo}>
                    <img src={Logo} alt="" className={classes.logo__img}/>
                </Box>

                <Box className={classes.phone}>
                    <Box className={classes.imgWrapper}>
                        <img src={PhoneIcon} className={classes.phoneIcon} alt=""/>
                    </Box>
                    <Typography className={classes.phone__number} variant="subtitle1">+38 (050) 690-04-40</Typography>
                </Box>

                <PhoneButton/>

            </Container>
        </Box>
    )
}

export default Header;