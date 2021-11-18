import styles from './index.styles'
import React from "react"
import {Box} from "@mui/material"
import PhoneIco from "assets/telephone_ico.svg"
const PhoneButton = () => {
    const classes = styles();
    return(
        <Box
            className={classes.root}>
            <Box
                className={classes.circle2}>
                <Box
                    className={classes.circle3}>
                    <img
                        className={classes.ico}
                        src={PhoneIco}
                        alt=""/>
                </Box>
            </Box>
        </Box>
    )
}
export default PhoneButton