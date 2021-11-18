import React from "react";

import {makeStyles} from "@mui/styles";


export default makeStyles((theme) => {
    return {
        root: {
            backgroundColor: "rgba(37, 37, 45, 1)",
        },
        title: {
            color: "#fff",
            marginBottom: "50px",
            [theme.breakpoints.down('md')]: {
                textAlign: "center",
                fontSize: "24px"
            },
        },
        button__wrap: {
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center"
        },
        button__text: {
            color: "rgba(247, 172, 114, 1)",
            marginRight: "30px"
        },
        button__icon: {
            width: "50px",
            height: "15px"
        }
    }
});