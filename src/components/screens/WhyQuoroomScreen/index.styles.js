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
            fontWeight: "300",
            // color: "rgba(37, 37, 45, 1)",
            maxWidth: "40%",
            [theme.breakpoints.down('md')]: {
                fontWeight: "400",
                color: "rgba(37, 37, 45, 1)",
            },
        },
        image: {
            maxWidth: "190px",
            marginBottom: "40px"
        },
        text: {

        },
        tab: {
            maxWidth: 'none',
            justifyItems: "start"
        }
    }
});