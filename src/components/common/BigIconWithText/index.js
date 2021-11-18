import styles from './index.styles'
import React from "react"
import {Box, Typography} from "@mui/material"


const BigIconWithText = ({url, desciption}) => {
    const classes = styles();

    return (
        <Box className={classes.root}>
            <Box
                className={classes.iconWrapper}
            >
                <img
                    className={classes.icon}
                    src={url}
                    alt="Icon"
                />
            </Box>
            <Typography
                className={classes.desciption}
                variant="subtitle2"
            >
                {desciption}
            </Typography>
        </Box>
    )
}

export default BigIconWithText;