import styles from './index.styles'
import React from "react"
import {Box, Button, Container, Grid, Typography} from "@mui/material"


import ImgTest1 from "assets/new_1.png"
import ImgTest2 from "assets/new_2.png"
import {ButtonWithArrow, NewCard, ScreenLayout} from "../../common"
const NewsScreen = () => {
    const classes = styles();
    return (
        <ScreenLayout extraClasses={{root:classes.root}}>
            <Container>
                <Box className={classes.topSection}>
                    <Typography variant="h2" className={classes.title}>Новости компании</Typography>
                    <ButtonWithArrow text={"Смотреть все новости"}/>
                </Box>

                    <Box>
                        <Grid container spacing={2}>
                            <Grid item sm={12} md={6}>
                                <NewCard
                                    src={ImgTest1}
                                    title={
                                        "Строительство нового Таунхауса не за горами,в ближайшее время оповестим вас"}
                                    description={
                                        "Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться."}
                                    date={
                                        "14.09.2021"}
                                />
                            </Grid>
                            <Grid item sm={12} md={6}>
                                <NewCard
                                    src={ImgTest2}
                                    title={
                                        "Строительство нового Таунхауса не за горами,в ближайшее время оповестим вас"}
                                    description={
                                        "Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться."}
                                    date={
                                        "14.09.2021"}
                                />
                            </Grid>
                        </Grid>
                    </Box>

            </Container>
        </ScreenLayout>
    )
}
export default NewsScreen