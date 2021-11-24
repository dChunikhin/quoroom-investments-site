import React from "react"

import {makeStyles} from "@mui/styles"
import ArrowSlider from "../../../assets/right_arrow.png";
import GradientLeft from "../../../assets/gradient_left.png";
import GradientRight from "../../../assets/gradient_right.png";


export default makeStyles((theme) => {
    return {
        root: {
            backgroundColor: "#25252D",
        },
        tabs: {
            marginBottom: "30px",
        },
        tabWrap: {
            '& .MuiBox-root': {
                padding: '0px',
            },
        },
        tab: {
           color: "rgba(255, 255, 255, 0.3)"
        },
        imgWrap: {

        },
        img: {
            display: "block",
            width: "100%"
        },
        arrowsSlider: {
            display: "flex",
            justifyContent: "center",
            alignItems: 'center',
            padding: '20px 0'
        },
    }
});