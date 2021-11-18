import styles from './index.styles'
import React from "react"
import {Box, Container, Typography, Tabs, Tab} from "@mui/material"
import GalleryImg1 from "assets/gallery_test.png"
import GalleryImg2 from "assets/gallery_test2.png"
import GalleryImg3 from "assets/gallery_test3.png"
import PropTypes from 'prop-types'



import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'




import {ScreenLayout, SlickSlider} from "../../common";
import ArrowSlider from "../../../assets/right_arrow.png"




const GalleryScreen = () => {

    const classes = styles();
    function TabPanel(props) {
        const { children, value, index, ...other } = props;
        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box>
                        {children}
                    </Box>
                )}
            </div>
        );
    };

    TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
    };

    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    const [value, setValue] = React.useState(0);
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };



    return (
        <ScreenLayout extraClasses={{root:classes.root}}>
            <Container>
                <Tabs className={classes.tabs} value={value} onChange={handleChange} centered>
                    <Tab className={classes.tab} label={
                        <Typography  variant="body1"> Экстерьер </Typography>
                    }
                         {...a11yProps(0)}/>
                    <Tab className={classes.tab} label={
                        <Typography  variant="body1"> Интерьер </Typography>
                    } {...a11yProps(1)}/>
                    <Tab className={classes.tab} label={
                        <Typography  variant="body1"> Терасса </Typography>
                    } {...a11yProps(2)}/>
                </Tabs>
            </Container>
            <TabPanel classes={classes.tabWrap} value={value} index={0}>
                <Carousel className={classes.carouselWrap}
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
                          showIndicators={false}
                          showThumbs={false}
                          showStatus={false}>
                    <img className={classes.img} src={GalleryImg1} alt=""/>
                    <img className={classes.img} src={GalleryImg2} alt=""/>
                    <img className={classes.img} src={GalleryImg3} alt=""/>
                </Carousel>
            </TabPanel>
            <TabPanel classes={classes.tabWrap} value={value} index={1}>
                <Carousel className={classes.carouselWrap}
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
                          showIndicators={false}
                          showThumbs={false}
                          showStatus={false}>
                    <img className={classes.img} src={GalleryImg1} alt=""/>
                    <img className={classes.img} src={GalleryImg2} alt=""/>
                    <img className={classes.img} src={GalleryImg3} alt=""/>
                </Carousel>
            </TabPanel>
            <TabPanel classes={classes.tabWrap} value={value} index={2}>
                <Carousel className={classes.carouselWrap}
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
                          showIndicators={false}
                          showThumbs={false}
                          showStatus={false}>
                    <img className={classes.img} src={GalleryImg1} alt=""/>
                    <img className={classes.img} src={GalleryImg2} alt=""/>
                    <img className={classes.img} src={GalleryImg3} alt=""/>
                </Carousel>
            </TabPanel>
        </ScreenLayout>
    )
}

export default GalleryScreen