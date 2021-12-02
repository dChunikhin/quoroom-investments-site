import React from "react";

import {makeStyles} from "@mui/styles";


export default makeStyles((theme) => {
    return {
        root: {
            position: "relative",
            boxShadow: "none",
            cursor: "pointer",
            transition: "0.3s",
            marginBottom: "30px",
            paddingBottom: "24px",
            "&:hover": {
                backgroundColor: "#F3F4F7"
            }
        },
        imgWrapper: {
            borderBottom: "4px solid #F7AC72",
            [theme.breakpoints.up('xs')]: {
                height: "auto",
            },
        },
        img: {},
        cardInformation: {
            padding: "0 40px 0 40px",
            [theme.breakpoints.down('md')]: {
                padding: "0 24px 0px 24px",
            },
            [theme.breakpoints.down('sm')]: {
                padding: "0 24px 0px 24px",
            },

        },

        subtitle: {
            marginTop: "20px",
            marginBottom: "14px",
            color: "#F7AC72",
            [theme.breakpoints.down('md')]: {

            },
            [theme.breakpoints.down('sm')]: {
                marginTop: "16px",
            }
        },
        title: {
            marginBottom: "24px",
            [theme.breakpoints.down('sm')]: {
                fontSize: "18px",
                marginBottom: "14px",
            }
        },
        subtle: {
            opacity: ".5"
        },
        bold: {
            fontSize: "19px",
            [theme.breakpoints.down('sm')]: {
                fontSize: "16px",
            }
        },
        infoWrapper: {

        },
        houseInfoWrapper: {
            marginBottom: "24px",
        },

        textWithIconWrapper: {
            marginTop: "24px",
            marginBottom: "34px",
            [theme.breakpoints.down('md')]: {
                marginTop: "24px",
                marginBottom: "10px",
            },
        },
        price: {
        },
        button: {
            marginLeft: "40px",
            [theme.breakpoints.down('md')]: {
                marginLeft: "0"
            },
        }
    }
});