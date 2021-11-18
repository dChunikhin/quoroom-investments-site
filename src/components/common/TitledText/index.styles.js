import React from "react"
import {makeStyles} from "@mui/styles"

import ArrowSlider from "assets/right_arrow.png"


export default makeStyles((theme) => {
    return {
        root: {
            display: "flex",
            flexDirection: ({ inline }) => inline ? 'row' : 'column',
            justifyContent: ({ inline }) => inline ? "space-between" : 'flex-end',
            alignItems: ({ inline }) => inline ? "center" : 'flex-start',
        },
        title: {
            fontWeight: "400",
            verticalAlign: "bottom",
        },
        text: {},
        caption: {
            color: 'blue'
        }
    }
});