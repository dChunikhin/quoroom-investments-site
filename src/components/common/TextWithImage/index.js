import styles from './index.styles'
import React from "react"
import {Box, Typography} from "@mui/material"
import clsx from "clsx";


const TextWithImage = ({url, children, title, variantText, variantTitle, extraClasses={}}) => {
    const classes = styles();

    return (
        <Box
            className={clsx(classes.root, extraClasses?.root)}>
            <Box className={classes.wrapper}>
                <Box
                    className={clsx(classes.imageWrapper, extraClasses?.imageWrapper)}
                >
                    <img
                        className={clsx(classes.image, extraClasses?.image)}
                        src={url}
                        alt="Icon"
                    />
                </Box>
                <Typography
                    variant={variantTitle}
                    className={clsx(classes.title, extraClasses?.title)}
                >
                    {title}
                </Typography>
            </Box>
            <Typography
                className={clsx(classes.text, extraClasses?.text)}
                variant={variantText}
            >
                {children}
            </Typography>
        </Box>
    )
}

export default TextWithImage;