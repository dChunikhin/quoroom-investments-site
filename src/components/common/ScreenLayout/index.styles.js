import React from "react";

import {makeStyles} from "@mui/styles";


export default makeStyles((theme) => {
    return {
        root: {
            padding: "120px 0",
            [theme.breakpoints.down('md')]: {
                padding: "60px 24px"
            },
            [theme.breakpoints.down('sm')]: {
                padding: "40px 0px"
            },
        },
    }
});