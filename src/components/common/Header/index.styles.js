import React from "react";

import gradientLink from "assets/gradient_link.png"



import {makeStyles} from "@mui/styles";


export default makeStyles((theme) => {
    return {
        root: {
            padding: "0",
            position: "fixed",
            top: "0",
            left: "auto",
            width: "100%",
            zIndex: "1",
            backgroundColor: "rgba(37, 37, 45, .94)",
        },
        container: {
            position: "relative",
            display: "flex",
            alignItems: "center",
            "& > *": {
                flexBasis: "33.333%",
            },
            [theme.breakpoints.down('md')]: {
                padding: "34px 14px",
            },
        },
        logo: {
            width: "134px",
            display: "flex",
            justifyContent: "center",
        },
        menu:{
            display: "flex",
            [theme.breakpoints.up('md')]: {
                display: "flex"
            },
            [theme.breakpoints.down('md')]: {
                display: "none"
            },
        },
        link: {
            transition: "all .3s ease-out",
            display: "block",
            padding: "42px 20px",
            fontFamily: "Roboto",
            fontSize: "14px",
            color: "#fff",
            fontWeight: "200",
            textDecoration: "none",
            borderBottom: "2px solid transparent",
            "&:hover": {
                borderBottom: "2px solid #F7AC72"
            },
        },
        activeLink: {
            borderBottom: "2px solid #F7AC72",
            backgroundImage: `url(${gradientLink})`,
            backgroundRepeat: "repeat-x",
            backgroundSize: "1px 100%"
        },
        menu__button: {
            backgroundColor: "rgba(37, 37, 45, 0)",
            border: "none",
            [theme.breakpoints.up('md')]: {
                display: "none"
            },
            [theme.breakpoints.down('md')]: {
                display: "flex"
            },
        },
        logo__img: {
            display: "block",
            maxWidth: "130px",
            [theme.breakpoints.down('md')]: {
                maxWidth: "80px",
            },
        },
        phone: {
            cursor: "pointer",
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
            [theme.breakpoints.down('md')]: {
                display: "none",
            },
        },
        imgWrapper: {
            display: "flex",
            justifyContent: "center",
            position: "relative",
            "&::before": {
                content: "",
                display: "block",
                width: "30px",
                height: "30px",
                position: "absolute",
                top: "50%",
                left: "50%",
                backgroundColor: "rgba(247, 172, 114, .5)"
            }
        },
        phoneIcon: {
            marginRight: "12px"
        },
        phone__number: {
            color: "white"
        }

    }
});