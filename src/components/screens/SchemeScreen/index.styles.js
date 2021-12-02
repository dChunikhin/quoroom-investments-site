import React from "react"

import {makeStyles} from "@mui/styles"
import schemeArr from "assets/scheme_arr.png"


export default makeStyles((theme) => {
    return {
        root: {
            [theme.breakpoints.down('md')]: {
                padding: "60px 0"
            },
        },
        buttonTop: {
            display: "block",
            padding: "0",
            marginBottom: "24px",
            [theme.breakpoints.down('md')]: {
                display: "none"
            },
            [theme.breakpoints.up('md')]: {
                display: "block"
            },
        },
        buttonBottom: {
            display: "none",
            [theme.breakpoints.down('md')]: {
                display: "block"
            },
        },
        buttonText:{
            textAlign: "left",
            padding: "0"
        },
        scheme: {
            padding: "50px",
            backgroundColor:"#292929",
            borderBottom: "4px solid #F7AC72",
            [theme.breakpoints.down('md')]: {
                padding: "40px 30px"
            },
        },
        schemeContainer: {
            display: "flex",
            justifyContent: "space-between",
            [theme.breakpoints.down('md')]: {
                display: "block",
            },
        },
        schemeHead: {
            display: "flex",
            justifyContent: "space-between",
            paddingRight: "18px",
            [theme.breakpoints.down('md')]: {
                marginBottom: "24px",
                alignItems: "center",
                paddingRight: "0px"
            },
            [theme.breakpoints.down('lg')]: {
                display: "flex",
                justifyContent: "space-between",
            },
        },
        schemeItem: {
            [theme.breakpoints.down('md')]: {
                marginBottom: "44px",
                "&:last-child": {
                    marginBottom: "0"
                },
            },
        },
        schemeBox: {
            paddingRight: "18px",
            [theme.breakpoints.down('md')]: {
                paddingRight: "0"
            }
        },
        title: {
            fontSize: "24px",
            color: "#fff"
        },
        number: {
            fontSize: "14px",
            fontStyle: "italic",
            fontWeight: "300",
            color: "#F7AC72",

            marginBottom: "20px",
            position: "relative",
            "&::before": {
                content: "''",
                display: "block",
                position: "absolute",
                top: "50%",
                right: "20px",
                width: "80%",
                height: "1px",
                backgroundColor: "#606060"
            },
            "&::after": {
                content: "''",
                display: "block",
                position: "absolute",
                top: "8px",
                right: "20px",
                width: "5px",
                height: "7px",
                backgroundImage:  `url(${schemeArr})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "5px 7px",
                backgroundPosition: "center center"
            },

        },
        subtitle: {
            fontSize: "18px",
            fontWeight: "400",
            color: "#fff",
            marginBottom: "15px"
        },
        description: {
            fontSize: "14px",
            fontWeight: "200",
            color: "#8E8E8E",
        },
    }
});