import React from "react"
import {makeStyles} from "@mui/styles"

import ArrowSlider from "assets/right_arrow.png"


export default makeStyles((theme) => {
    return {
        root: {},
        title: {
            [theme.breakpoints.down('md')]: {
                fontSize: "24px"
            },
        },
        topSection: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "75px",
            [theme.breakpoints.down('md')]: {
                marginBottom: "34px"
            },
        },
        buttonTop: {
            [theme.breakpoints.down('sm')]: {
                display: "none"
            },
        },
        buttonBottom: {
            display:"none",
            [theme.breakpoints.down('sm')]: {
                display: "flex"
            },
        },
        product: {
            backgroundColor: "rgba(40, 44, 52, 1)",
            minHeight: "400px",
            position: "relative",
            marginBottom: "",
            '&::before': {
                content: '""',
                display: "block",
                backgroundColor: "rgba(247, 172, 114, 1)",
                width: "100%",
                height: "4px",
                position: "absolute",
                right: "auto",
                bottom: "0"
            }
        },
        arrowsSlider: {
            display: "flex",
            justifyContent: "center",
            "& > *": {
                display: "block",
                width: "50px",
                height: "16px",
                backgroundColor: "rgba(247, 172, 114, 0)",
                backgroundImage: "url(" + ArrowSlider + ")",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right center",
                backgroundSize: "50px 15px",
                border: "none",
                margin: "0 40px"
            }
        },
        arrowLeft: {
            transform: "scaleX(-1)"
        }
    }
});