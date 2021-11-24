import React from "react";

import {makeStyles} from "@mui/styles"



export default makeStyles((theme) => {
    return {
        "@keyframes fadeIn": {
            "0": {
                transform: "translate(10px, -50%)"
            },
            "50%": {
                transform: "translate(0, -50%)"
            },
            "100%": {
                transform: "translate(10px, -50%)"
            },
        },
        root: {
            marginRight: "50px",
            display: "flex",
            justifyContent: "stretch",
            alignItems: "center",
            [theme.breakpoints.down('md')]: {
                justifyContent: "center",
            },
            "&:hover": {
                "& $icon": {
                    transform: "translate(10px, -50%)",
                    animation: "$fadeIn 1s ease infinite",
                    animationDelay: " 0s"
                },
                "& button": {
                    fontSize: "30px"
                }
            },

        },
        button: {
            padding: "0",
            position: "relative",
        },
        text: {
            transition: ".4s",
            color: "rgba(247, 172, 114, 1)",
            marginRight: "30px",
            [theme.breakpoints.down('sm')]: {

                marginRight: "14px",
            },
        },
        icon: {
            display: "block",
            position: "absolute",
            top: "50%",
            transform: "translate(-0, -50%)",
            right: "-50px",
            width: "50px",
            height: "15px",
            transition: "1s"
        }
    }
});