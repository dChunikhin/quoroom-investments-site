import styles from './index.styles'
import React from "react"
import {Box, Button, Container, Typography, Grid} from "@mui/material"
import arrowRight from "../../../assets/right_arrow.png";
import {ButtonWithArrow, ScreenLayout, TitledText} from "../../common";

const SchemeScreen = () => {
  const classes = styles()
  return (
      <ScreenLayout extraClasses={{root:classes.root}}>
          <Container>
              <Box className={classes.scheme}>
                  <Grid container spacing={2}>
                      <Grid item sm={12} md={12} lg={2}>
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
                      <Grid item sm={12} md={12} lg={10}>
                          <Box className={classes.schemeContainer}>
                              <Box className={classes.schemeItem}>
                                  <Typography className={classes.number}>01</Typography>
                                  <TitledText
                                      title={"Вы оставляете заявку"}
                                      inline={false}
                                      variantText={"body2"}
                                      variantTitle={"subtitle1"}
                                      extraClasses={{ root: classes.schemeBox, title:classes.subtitle, text:classes.description}}>
                                      Вы можете оставить заявку
                                      на сайте, позвонить или
                                      написать нам на email
                                  </TitledText>
                              </Box>
                              <Box className={classes.schemeItem}>
                                  <Typography className={classes.number}>02</Typography>
                                  <TitledText
                                      title={"Обработка заявки"}
                                      inline={false}
                                      variantText={"body2"}
                                      variantTitle={"subtitle1"}
                                      extraClasses={{ root: classes.schemeBox, title:classes.subtitle, text:classes.description}}>
                                      Вы можете оставить заявку
                                      на сайте, позвонить или
                                      написать нам на email
                                  </TitledText>
                              </Box>
                              <Box className={classes.schemeItem}>
                                  <Typography className={classes.number}>03</Typography>

                                  <TitledText
                                      title={"Назначаем встречу"}
                                      inline={false}
                                      variantText={"body2"}
                                      variantTitle={"subtitle1"}
                                      extraClasses={{ root: classes.schemeBox, title:classes.subtitle, text:classes.description}}>
                                      Вы можете оставить заявку
                                      на сайте, позвонить или
                                      написать нам на email
                                  </TitledText>
                              </Box>
                              <Box className={classes.schemeItem}>
                                  <Typography className={classes.number}>04</Typography>
                                  <TitledText
                                      title={"Подписание договора"}
                                      inline={false}
                                      variantText={"body2"}
                                      variantTitle={"subtitle1"}
                                      extraClasses={{ root: classes.schemeBox, title:classes.subtitle, text:classes.description}}>
                                      Вы можете оставить заявку
                                      на сайте, позвонить или
                                      написать нам на email
                                  </TitledText>
                              </Box>
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
