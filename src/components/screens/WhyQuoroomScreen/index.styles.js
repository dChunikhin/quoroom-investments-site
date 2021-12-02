import React from "react";

import {makeStyles} from "@mui/styles";


export default makeStyles((theme) => {
    return {
        root: {
            borderTop: "1px solid rgba(25, 25, 25, .1)"
        },
        title: {
            marginBottom: "75px",
            [theme.breakpoints.down('md')]: {
                fontSize: "24px",
                marginBottom: "40px"
            },
        },
        wrapperTab: {
            width: '100%',

        },
        textTab: {
            lineHeight: "1.7",
            width: "60%",
            [theme.breakpoints.up('md')]: {
                display: "none",
            },
            [theme.breakpoints.down('md')]: {
                display: "block",
                color: "rgba(37, 37, 45, .5)",
                width: "100%",
            },

        },
        imageWrapperTab: {
            width: "74px",
            marginRight: "50px",
            position: "relative",
            '&::before': {
                content: '""',
                display: "block",
                backgroundColor: "rgba(247, 172, 114, 1)",
                width: "2px",
                height: "100%",
                position: "absolute",
                right: "-24px",
                top: "auto"
            }
        },
        imageTab: {
            maxWidth: "74px"
        },
        wrapper: {
            display: "block",
            [theme.breakpoints.down('md')]: {
                display: "none"
            },
        },
        titleTab: {
            lineHeight: "1.7",
            fontWeight: "300",
            // color: "rgba(37, 37, 45, 1)",
            maxWidth: "40%",
            [theme.breakpoints.down('md')]: {
                fontWeight: "600",
                color: "rgba(37, 37, 45, 1)",
                maxWidth: "70%",
                fontSize: "18px"
            },
        },
        tabPanel: {
            [theme.breakpoints.down('md')]: {
                display: "none"
            },
        },
        image: {
            maxWidth: "190px",
            marginBottom: "40px"
        },
        text: {
            lineHeight: "1.7",
        },
        tab: {
            marginBottom: "24px",
            maxWidth: 'none',
            justifyItems: "start"
        }
    }
});