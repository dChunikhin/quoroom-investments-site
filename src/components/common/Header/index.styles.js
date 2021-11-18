import React from "react";



import {makeStyles} from "@mui/styles";


export default makeStyles((theme) => {
    return {
        root: {
            padding: "28px 0",
            position: "absolute",
            top: "0",
            left: "auto",
            width: "100%",
            zIndex: "1",
            backgroundColor: "rgba(37, 37, 45, 0.4)",
        },
        container: {
            position: "relative",
            display: "flex",
            alignItems: "center",
            "& > *": {
                flexBasis: "33.333%",
            },
            [theme.breakpoints.down('md')]: {
                padding: "24px 24px"
            },
        },
        logo: {
            width: "134px",
            display: "flex",
            justifyContent: "center",
        },
        menu:{
            display: "flex",
        },
        menu__button: {
            backgroundColor: "rgba(37, 37, 45, 0)",
            border: "none"
        },
        logo__img: {
            display: "block",
            maxWidth: "130px"
        },
        phone: {
            display: "flex",
            justifyContent: "end",
            [theme.breakpoints.down('md')]: {
                display: "none",
            },
        },
        phone__icon: {
            marginRight: "12px"
        },
        phone__number: {
            color: "white"
        }

    }
});