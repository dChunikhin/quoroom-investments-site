import React from "react";

import {makeStyles} from "@mui/styles";


export default makeStyles((theme) => {
    return {
        root: {
            borderTop: "1px solid rgba(25, 25, 25, .1)"
        },
        title: {
            marginBottom: "75px",
            [theme.breakpoints.down('md')]: {
                fontSize: "24px",
                marginBottom: "40px"
            },
        },
        tab: {
            maxWidth: 'none'
        }
    }
});