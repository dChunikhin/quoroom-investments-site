

import React from "react"
import {makeStyles} from "@mui/styles"

export default makeStyles((theme) => {

    return {
        root: {
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            alignContent: "flex-start",
            [theme.breakpoints.down('md')]: {
                marginBottom: "24px"
            },
        },
        icon: {
            marginRight: "14px"
        },
        text: {
            paddingRight: "15px"
        }
    }
});