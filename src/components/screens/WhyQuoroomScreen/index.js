import styles from './index.styles'
import React from "react"
import {Box, Container, Typography, Grid, Tabs, Tab} from "@mui/material"
import IconTest from 'assets/house_icon.png'
import PropTypes from 'prop-types'
import { ScreenLayout, TextWithImage} from "../../common"

import benefits from "data/benefits.json"

const WhyQuoroomScreen = () => {
    const classes = styles();

    function TabPanel(props) {
        const {children, value, index, ...other} = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`vertical-tabpanel-${index}`}
                aria-labelledby={`vertical-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box sx={{p: 3}}>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }

    TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
    };

    function a11yProps(index) {
        return {
            id: `vertical-tab-${index}`,
            'aria-controls': `vertical-tabpanel-${index}`,
        };
    };

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <ScreenLayout extraClasses={{root:classes.root}}>
            <Container>
                <Typography
                    className={classes.title}
                    variant="h2"
                >
                    Почему стоит выбрать Quoroom?
                </Typography>
                <Grid container>
                    <Grid item sm={12} md={6} xs={12}>
                        <Tabs
                            orientation="vertical"
                            variant="scrollable"
                            value={value}
                            onChange={handleChange}
                            aria-label="Vertical tabs example"
                            TabIndicatorProps={{
                                style: {
                                    backgroundColor: "transparent",
                                    width: "100%"
                                }
                            }}
                        >
                            {
                                benefits.map((benefit, index) => (
                                    <Tab
                                        classes={{root: classes.tab}}
                                        sx={{
                                            textAlign: "left",
                                            padding: "0"
                                        }}
                                        label={
                                            <TextWithImage
                                                url={IconTest}
                                                title={benefit.title}
                                                variantText={"body1"}
                                                variantTitle={"h4"}
                                                extraClasses={{
                                                    root:classes.wrapperTab,
                                                    title:classes.titleTab,
                                                    text:classes.textTab,
                                                    imageWrapper: classes.imageWrapperTab,
                                                    image:classes.imageTab
                                                }}
                                            >
                                                {benefit.description}
                                            </TextWithImage>
                                        }
                                        {...a11yProps(index)}
                                    />
                                ))
                            }
                        </Tabs>
                    </Grid>
                    <Grid item sm={12} md={6} xs={12}>
                        {
                            benefits.map((benefit, index) => (
                                <TabPanel className={classes.tabPanel}
                                          value={value}
                                          index={index}>
                                    <TextWithImage
                                        url={IconTest}
                                        variantText={"body1"}
                                        extraClasses={{
                                            root:classes.wrapper,
                                            text:classes.text,
                                            image:classes.image}}
                                    >
                                        {benefit.description}
                                    </TextWithImage>
                                </TabPanel>
                            ))
                        }





                        <TabPanel className={classes.tabPanel}
                            value={value}
                            index={5}>
                            <TextWithImage
                                url={IconTest}
                                variantText={"body1"}
                                extraClasses={{
                                    root:classes.wrapper,
                                    text:classes.text,
                                    image:classes.image}}
                            >
                                6_Давно выяснено, что при оценке дизайна и композиции
                                читаемый текст мешает сосредоточиться. Lorem Ipsum используют
                                потому, что тот обеспечивает более или менее стандартное заполнение
                                шаблона, а также реальное распределение букв и пробелов в абзацах
                            </TextWithImage>
                        </TabPanel>
                    </Grid>
                </Grid>
            </Container>
        </ScreenLayout>
    )
}

export default WhyQuoroomScreen