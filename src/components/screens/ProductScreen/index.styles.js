import React from "react"
import {makeStyles} from "@mui/styles"

import ArrowSlider from "assets/right_arrow.png"


export default makeStyles((theme) => {
    return {
        root: {},
        link: theme.mixins.link,
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
        }
    }
});