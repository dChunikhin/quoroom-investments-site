import React from "react"
import styles from "./index.styles"
import {Box, Typography} from "@mui/material";
import clsx from 'clsx'

const TitledText = ({title, children, variantTitle, variantText, inline = true, caption, extraClasses = {} }) => {
    const classes = styles({ inline });
    return (
        <Box className={clsx(classes.root, extraClasses?.root)}>

            <Typography
                variant={variantTitle || "body1"}
                className={clsx(classes.title, extraClasses?.title)}>
                {title}
            </Typography>

            <Typography
                variant={variantText || "h3"}
                className={clsx(classes.text, extraClasses?.text)}>
                {children}
            </Typography>

            {caption && <Typography variant="bod2" className={classes.caption}>{caption}</Typography>}
        </Box>
    )
}

export default TitledText