import styles from './index.styles'
import React from "react"
import {Box, Button, Container, Typography, Grid} from "@mui/material"
import arrowRight from "../../../assets/right_arrow.png";
import {ButtonWithArrow, NewCard, ScreenLayout, TitledText} from "../../common";

import steps from "data/steps.json"

const SchemeScreen = () => {
  const classes = styles()
  return (
      <ScreenLayout extraClasses={{root:classes.root}}>
          <Container>
              <Box className={classes.scheme}>
                  <Grid container spacing={2}>
                      <Grid item sm={12} md={12} lg={12}>
                          <Box className={classes.schemeHead}>
                              <Typography className={classes.title}>
                                  Схема работы
                              </Typography>
                              <ButtonWithArrow
                                  text={"Получить консультацию"}
                                  extraClasses={{root:classes.buttonTop, text:classes.buttonText}}
                              />
                          </Box>
                      </Grid>
                      <Grid item sm={12} md={12} lg={12}>
                          <Box className={classes.schemeContainer}>
                              {steps.map((item) => {
                                  return (
                                      <Box className={classes.schemeItem}>
                                          <Typography className={classes.number}>
                                              {item.id}
                                          </Typography>
                                          <TitledText
                                              title={item.title}
                                              inline={false}
                                              variantText={"body2"}
                                              variantTitle={"subtitle1"}
                                              extraClasses={{ root: classes.schemeBox, title:classes.subtitle, text:classes.description}}>
                                              {item.content}
                                          </TitledText>
                                      </Box>
                                  )
                              })}
                              <ButtonWithArrow
                                  text={"Получить консультацию"}
                                  extraClasses={{root:classes.buttonBottom}}
                              />
                          </Box>
                      </Grid>



                  </Grid>




              </Box>
          </Container>
      </ScreenLayout>
  )
}

export default SchemeScreen
