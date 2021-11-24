import React from "react";

import {makeStyles} from "@mui/styles";


export default makeStyles((theme) => {
    return {
        root: {
            boxShadow: "none",
            cursor: "pointer",
            transition: "0.3s",
            marginBottom: "30px",
            "&:hover": {
                backgroundColor: "#F3F4F7"
            }
        },
        imgWrapper: {
            borderBottom: "4px solid #F7AC72"
        },
        img: {},
        cardInformation: {
            padding: "24px 40px 40px 40px",
            [theme.breakpoints.down('md')]: {
                padding: "24px 24px 40px 24px",
            },
        },

        subtitle: {
            marginBottom: "14px",
            color: "#F7AC72"
        },
        title: {
            marginBottom: "24px"
        },
        infoWrapper: {

        },
        TextWithIconWrapper: {
            marginTop: "24px",
            marginBottom: "24px",
            [theme.breakpoints.down('md')]: {
                marginBottom: "14px",
            },
        },
        houseInfoWrapper: {
            marginBottom: "24px"
        }
    }
});