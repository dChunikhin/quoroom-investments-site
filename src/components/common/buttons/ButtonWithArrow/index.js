import styles from "./index.styles"
import React from "react"
import {Box, Button, Typography} from "@mui/material";
import arrowRight from "../../../../assets/right_arrow.png";
import { keyframes } from '@mui/system'
import clsx from 'clsx'

const arrowMove = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;


const ButtonWithArrow = ({text, extraClasses={}}) => {
    const classes = styles();
    return(
        <Box

            className={clsx(classes.root, extraClasses?.root)}>
            <Button
                classes={clsx(classes.button, extraClasses?.button)}
            >
                <Typography
                    className={clsx(classes.text, extraClasses?.text)}
                    variant="subtitle1"
                >
                    {text}
                </Typography>
                <img
                    className={clsx(classes.icon, extraClasses?.icon)}
                    src={arrowRight} alt=""/>
            </Button>

        </Box>
    )
}

export default ButtonWithArrow