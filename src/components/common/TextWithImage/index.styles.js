

import React from "react"
import {makeStyles} from "@mui/styles"

export default makeStyles((theme) => {

    return {
        root: {},
        wrapper: {
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            alignContent: "flex-start",
            [theme.breakpoints.down('md')]: {
                marginBottom: "24px"
            },
        },
        imageWrapper: {},
        image: {
            marginRight: "14px"
        },
        title: {},
        text: {
            paddingRight: "15px"
        }
    }
});