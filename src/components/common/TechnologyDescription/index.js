import React from "react"
import styless from "./index.styles"
import {Box, Typography} from "@mui/material"

const TechnologyDescription = ({number, title, description}) => {
    const classes = styless();
    return(
        <Box
            className={classes.root}
        >
            <Box
                className={classes.row}
            >
                <Box
                    className={classes.number}
                >
                    {number}
                </Box>
                <Box
                    className={classes.title}
                >
                    {title}
                </Box>
            </Box>
            <Typography
                variant="body1"
                className={classes.description}
            >
                {description}
            </Typography>
        </Box>
    )
}

export default TechnologyDescription