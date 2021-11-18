import React from "react"
import {makeStyles} from "@mui/styles"

export default makeStyles((theme) => {

    return {
        root: {
            [theme.breakpoints.down('md')]: {
                display: "none"
            },
        },
        iconWrapper: {
            maxWidth: "190px",
            marginBottom: "40px"
        },
        icon: {
            width: "100%"
        }
    }
});