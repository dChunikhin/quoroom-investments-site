import styles from "./index.styles"
import React from "react"
import {Box, Button, Container, Grid, Typography} from "@mui/material"
import arrowRight from "../../../assets/right_arrow.png";
import {ButtonWithArrow, ScreenLayout, TechnologyDescription} from "../../common";

const TechnologyScreen = () => {
    const classes = styles();
    return (
        <ScreenLayout extraClasses={{root:classes.root}}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item sm={7} md={7}>

                    </Grid>
                    <Grid item sm={5} md={5}>
                        <Typography
                            variant="h2"
                            className={classes.title}
                        >
                            Технологии
                        </Typography>
                        <TechnologyDescription
                            number={"1"}
                            title={"КРОВЛЯ"}
                            description={"Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться."}
                        />
                        <ButtonWithArrow
                            text={"Получить консультацию"}
                        />
                    </Grid>
                </Grid>
            </Container>
        </ScreenLayout>
    )
}

export default TechnologyScreen;