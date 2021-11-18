import styles from "./index.styles"
import React from "react"
import HouseIcon from "../../../assets/house.svg";
import {Box, Typography} from "@mui/material";
const TextWithIcon = ({url, children}) => {
    const classes = styles();
    return(
        <Box className={classes.root}>
            <img
                src={url}
                alt=""
                className={classes.icon}
            />
            <Typography
                className={classes.text}
            >
                {children}
            </Typography>
        </Box>
    )
}
export default TextWithIcon