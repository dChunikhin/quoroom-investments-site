import styles from './index.styles'
import React from "react"
import {Box, Container, Typography, Grid, Tabs, Tab} from "@mui/material"
import IconTest from 'assets/house_icon.png'
import PropTypes from 'prop-types'
import { ScreenLayout, TextWithImage} from "../../common";

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
                            <Tab
                                classes={{root: classes.tab}}
                                sx={{
                                    width: "100%",
                                    textAlign: "left",
                                    padding: "0",
                                    marginBottom: "40px"
                                }}
                                variant="fullWidth"

                                label={
                                    <TextWithImage
                                        url={IconTest}
                                        title={"Большой опыт в строительстве"}
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
                                        1_Давно выяснено, что при оценке дизайна и композиции
                                        читаемый текст мешает сосредоточиться. Lorem Ipsum используют
                                        потому, что тот обеспечивает более или менее стандартное заполнение
                                        шаблона, а также реальное распределение букв и пробелов в абзацах
                                    </TextWithImage>
                                }
                                {...a11yProps(0)}
                            >
                            </Tab>
                            <Tab
                                classes={{root: classes.tab}}
                                sx={{
                                    width: "100%",
                                    textAlign: "left",
                                    padding: "0",
                                    marginBottom: "40px"
                                }}
                                label={
                                    <TextWithImage
                                        url={IconTest}
                                        title={"Бесплатное и быстрое оформление"}
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
                                        2_Давно выяснено, что при оценке дизайна и композиции
                                        читаемый текст мешает сосредоточиться. Lorem Ipsum используют
                                        потому, что тот обеспечивает более или менее стандартное заполнение
                                        шаблона, а также реальное распределение букв и пробелов в абзацах
                                    </TextWithImage>
                                }
                                {...a11yProps(1)}
                            />
                            <Tab
                                classes={{root: classes.tab}}
                                sx={{
                                    textAlign: "left",
                                    padding: "0",
                                    marginBottom: "40px"
                                }}
                                label={
                                    <TextWithImage
                                        url={IconTest}
                                        title={"Гарантия сдачи дома в срок не более 5 месяцев"}
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
                                        3_Давно выяснено, что при оценке дизайна и композиции
                                        читаемый текст мешает сосредоточиться. Lorem Ipsum используют
                                        потому, что тот обеспечивает более или менее стандартное заполнение
                                        шаблона, а также реальное распределение букв и пробелов в абзацах
                                    </TextWithImage>
                                }
                                {...a11yProps(2)}
                            />
                            <Tab
                                classes={{root: classes.tab}}
                                sx={{
                                    textAlign: "left",
                                    padding: "0",
                                    marginBottom: "40px"
                                }}
                                label={
                                    <TextWithImage
                                        url={IconTest}
                                        title={"Отличные условия для покупки в рассочку"}
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
                                        4_Давно выяснено, что при оценке дизайна и композиции
                                        читаемый текст мешает сосредоточиться. Lorem Ipsum используют
                                        потому, что тот обеспечивает более или менее стандартное заполнение
                                        шаблона, а также реальное распределение букв и пробелов в абзацах
                                    </TextWithImage>
                                }
                                {...a11yProps(3)}
                            />
                            <Tab
                                classes={{root: classes.tab}}
                                sx={{
                                    textAlign: "left",
                                    padding: "0"
                                }}
                                label={
                                    <TextWithImage
                                        url={IconTest}
                                        title={"Все дома с участком не менее 5 соток"}
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
                                        5_Давно выяснено, что при оценке дизайна и композиции
                                        читаемый текст мешает сосредоточиться. Lorem Ipsum используют
                                        потому, что тот обеспечивает более или менее стандартное заполнение
                                        шаблона, а также реальное распределение букв и пробелов в абзацах
                                    </TextWithImage>
                                }
                                {...a11yProps(4)}
                            />
                        </Tabs>
                    </Grid>
                    <Grid item sm={12} md={6} xs={12}>
                        <TabPanel
                            value={value}
                            index={0}>
                            <TextWithImage
                                url={IconTest}
                                variantText={"body1"}
                                extraClasses={{
                                    root:classes.wrapper,
                                    text:classes.text,
                                    image:classes.image}}
                            >
                                1_Давно выяснено, что при оценке дизайна и композиции
                                читаемый текст мешает сосредоточиться. Lorem Ipsum используют
                                потому, что тот обеспечивает более или менее стандартное заполнение
                                шаблона, а также реальное распределение букв и пробелов в абзацах
                            </TextWithImage>
                        </TabPanel>
                        <TabPanel
                            value={value}
                            index={1}>
                            <TextWithImage
                                url={IconTest}
                                variantText={"body1"}
                                extraClasses={{
                                    root:classes.wrapper,
                                    text:classes.text,
                                    image:classes.image}}
                            >
                                2_Давно выяснено, что при оценке дизайна и композиции
                                читаемый текст мешает сосредоточиться. Lorem Ipsum используют
                                потому, что тот обеспечивает более или менее стандартное заполнение
                                шаблона, а также реальное распределение букв и пробелов в абзацах
                            </TextWithImage>
                        </TabPanel>
                        <TabPanel
                            value={value}
                            index={2}>
                            <TextWithImage
                                url={IconTest}
                                variantText={"body1"}
                                extraClasses={{
                                    root:classes.wrapper,
                                    text:classes.text,
                                    image:classes.image}}
                            >
                                3_Давно выяснено, что при оценке дизайна и композиции
                                читаемый текст мешает сосредоточиться. Lorem Ipsum используют
                                потому, что тот обеспечивает более или менее стандартное заполнение
                                шаблона, а также реальное распределение букв и пробелов в абзацах
                            </TextWithImage>
                        </TabPanel>
                        <TabPanel
                            value={value}
                            index={3}>
                            <TextWithImage
                                url={IconTest}
                                variantText={"body1"}
                                extraClasses={{
                                    root:classes.wrapper,
                                    text:classes.text,
                                    image:classes.image}}
                            >
                                4_Давно выяснено, что при оценке дизайна и композиции
                                читаемый текст мешает сосредоточиться. Lorem Ipsum используют
                                потому, что тот обеспечивает более или менее стандартное заполнение
                                шаблона, а также реальное распределение букв и пробелов в абзацах
                            </TextWithImage>
                        </TabPanel>
                        <TabPanel
                            value={value}
                            index={4}>
                            <TextWithImage
                                url={IconTest}
                                variantText={"body1"}
                                extraClasses={{
                                    root:classes.wrapper,
                                    text:classes.text,
                                    image:classes.image}}
                            >
                                5_Давно выяснено, что при оценке дизайна и композиции
                                читаемый текст мешает сосредоточиться. Lorem Ipsum используют
                                потому, что тот обеспечивает более или менее стандартное заполнение
                                шаблона, а также реальное распределение букв и пробелов в абзацах
                            </TextWithImage>
                        </TabPanel>
                        <TabPanel
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