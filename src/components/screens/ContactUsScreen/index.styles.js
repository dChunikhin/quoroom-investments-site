import React from "react"

import {makeStyles} from "@mui/styles"
import BG from "../../../assets/abstract_bg.png";


export default makeStyles((theme) => {
    return {
        root: {
            padding: "120px 0",
            [theme.breakpoints.down('md')]: {
                padding: "60px 0"
            },
            backgroundImage: "url(" + BG + ")",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top right",
            backgroundSize: "100%",
        },
        title:{
            marginBottom: "30px",
            [theme.breakpoints.down('md')]: {
                fontSize: "24px"
            },
        },
        contactInformation:{
            marginBottom: "40px",

        },
        contactInformation__map:{
            minHeight: "235px",
            backgroundColor: "#E9E9E9",
        },
        contactInformation__title: {
            opacity: ".5"
        },
        contactInformation__description: {
            fontWeight: "500"
        },
        input: {
            color: "white!important",

        },

    }
});