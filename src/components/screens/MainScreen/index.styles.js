import React from "react";
import TestImg from "assets/test_img.png";

import {makeStyles} from "@mui/styles";


export default makeStyles((theme) => {
    return {
        root: {
            display: "flex",
            alignItems: "center",
            position: "relative",
            minHeight: "800px",
            backgroundImage: `url(${TestImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            padding: "50px 24px 50px 24px",
            [theme.breakpoints.down('md')]: {
                maxHeight: "800px",
                alignItems: "end",
                textAlign: "center"
            },
        },
        title: {
            color: "white",
            width: "100%",
            marginBottom: "18px",
            [theme.breakpoints.down('md')]: {
                fontSize: "38px"
            },
        },
        description: {
            color: "white",
            width: "50%",
            marginBottom: "50px",
            [theme.breakpoints.down('md')]: {
                width: "100%",
                marginBottom: "30px"
            },
        },
    }
});