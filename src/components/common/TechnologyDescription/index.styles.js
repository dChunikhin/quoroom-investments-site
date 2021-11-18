import React from "react";

import {makeStyles} from "@mui/styles";


export default makeStyles((theme) => {
    return {
        root: {},
        row: {
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            marginBottom: "40px",
            [theme.breakpoints.down('md')]: {
                justifyContent: "center",
            },
        },
        number: {
            position: "relative",
            fontSize: "48px",
            color: "rgba(247, 172, 114, 1)",
            fontFamily: "Roboto",
            fontWeight: "200",
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
        title: {
            marginLeft: "50px",
            fontSize: "18px",
            color: "#fff",
            fontFamily: "Roboto",
            fontWeight: "400"
        },
        description: {
            color: "#fff",
            marginBottom: "50px",
            [theme.breakpoints.down('md')]: {
                textAlign: "center",
            },

        }
    }
});