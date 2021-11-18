import styles from './index.styles'
import React from "react"
import {Box, Typography} from "@mui/material"


const ImageWithText = ({url, title, description}) => {
    const classes = styles();

    return (
        <Box className={classes.root}>
            <Box className={classes.row}>
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
                    className={classes.title}
                    variant="subtitle1"
                >
                    {title}
                </Typography>
            </Box>
            <Typography
                className={classes.description}
                variant="subtitle2"
            >
                {description}
            </Typography>
        </Box>
    )
}

export default ImageWithText;