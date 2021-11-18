import styles from "./index.styles"
import React from "react"
import {Box} from "@mui/material"
import clsx from "clsx";


const ScreenLayout = ({children, extraClasses}) => {
    const classes = styles();

    return(
        <Box className={clsx(classes.root,extraClasses?.root)}>
            {children}
        </Box>
    )
}

export default ScreenLayout