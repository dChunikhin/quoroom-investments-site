import styless from "./index.styles"
import React from "react"
import {Box} from "@mui/material"

import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import clsx from "clsx";

const Slider = ({children, extraClasses = {}}) => {
    const classes = styless()
    return(
        <Carousel
            className={clsx(classes.root, extraClasses?.root)}
            showIndicators={false}
            showThumbs={false}
            showStatus={false}
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
                (
                    <button type="button" onClick={onClickHandler} title={label} className={classes.arrowLeft}>

                    </button>
                )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
                (
                    <button type="button" onClick={onClickHandler} title={label} className={classes.arrowRight}>

                    </button>
                )
            }
        >
            {children}

        </Carousel>
    )
}
export default Slider