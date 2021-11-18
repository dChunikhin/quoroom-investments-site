import React from "react"
import {makeStyles} from "@mui/styles"

export default makeStyles((theme) => {

    return {
        root: {
            width: "100%"
        },
        row: {
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            [theme.breakpoints.down('md')]: {
                marginBottom: "24px"
            },
        },
        iconWrapper: {
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
        icon: {
            maxWidth: "74px"
        },
        title:{
            width: "60%",
            [theme.breakpoints.down('md')]: {
                fontWeight: "600",
                color: "rgba(35, 35, 35, 1)"
            },
        },
        description: {
            display: "none",
            color: "#232323",
            opacity: ".55",
            [theme.breakpoints.down('md')]: {
                display: "flex"
            },
        }
    }
});