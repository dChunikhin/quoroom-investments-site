import styles from './index.styles'
import React from "react"
import {Box, Typography} from "@mui/material"


const NewCard = ({src, title, description, date}) => {
    const classes = styles();

    return(
        <Box className={classes.root}>
            <img
                className={classes.img}
                src={src}
                alt=""/>
            <Box
                className={classes.wrapperText}>
                <Typography
                    variant="h4"
                    className={classes.title}>
                    {title}
                </Typography>
                <Typography
                    variant="body2"
                    className={classes.description}>
                    {description}
                </Typography>
                <Typography
                    variant="body2"
                    className={classes.date}>
                    {date}
            </Typography>
            </Box>
        </Box>
    )
}
export default NewCard