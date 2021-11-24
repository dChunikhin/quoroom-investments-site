import styles from './index.styles'
import React from "react"
import {Box, Typography} from "@mui/material"
import clsx from 'clsx'

const NewCard = ({src, title, description, date, variantTitle, extraClasses = {}}) => {
    const classes = styles();

    return(
        <Box className={clsx(classes.root, extraClasses?.root)}>
            <img
                className={clsx(classes.img, extraClasses?.img)}
                src={src}
                alt=""/>
            <Box
                className={clsx(classes.wrapperText, extraClasses?.wrapperText)}
            >
                <Typography
                    variant={ variantTitle || "h3" }
                    className={clsx(classes.title, extraClasses?.title)}
                >
                    {title}
                </Typography>
                <Typography
                    variant="body2"
                    className={clsx(classes.description, extraClasses?.description)}
                >
                    {description}
                </Typography>
                <Typography
                    variant="body2"
                    className={clsx(classes.date, extraClasses?.date)}
                >
                    {date}
            </Typography>
            </Box>
        </Box>
    )
}
export default NewCard