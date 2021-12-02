import styles from './index.styles'
import React from "react"
import {Box,Grid,Container,Typography} from "@mui/material"
import {ContactForm} from "../../forms";
import {ScreenLayout} from "../../common";


const ContactUsScreen = () => {
    const classes = styles();
    const handleSubmit = (values, callback = () => {}, errCallback = () => {}) => {
        // create(values)
        //     .then(callback)
        //     .catch(errCallback);
    }
    return (
        <ScreenLayout extraClasses={{root:classes.root}}>
            <Container>
                <Grid container alignItems={"end"} spacing={2}>
                    <Grid item sm={12} md={6}>
                        <Typography className={classes.title} variant="h2">Наши контакты</Typography>
                        <Box className={classes.contactInformation}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6} md={6}>
                                    <Typography variant="body1" className={classes.contactInformation__title}>Почта</Typography>
                                    <Typography variant="subtitle1" className={classes.contactInformation__description}>info@quoroom.com.ua</Typography>
                                </Grid>
                                <Grid item xs={12} sm={6} md={6}>
                                    <Typography variant="body1" className={classes.contactInformation__title}>Адресс</Typography>
                                    <Typography variant="subtitle1" className={classes.contactInformation__description}>г.Киев ул. Степана Бандеры 36</Typography>
                                </Grid>
                                <Grid item xs={12} sm={6} md={6}>
                                    <Typography variant="body1" className={classes.contactInformation__title}>Номер телефона</Typography>
                                    <Typography variant="subtitle1" className={classes.contactInformation__description}>+380 (93) 930 85 64</Typography>
                                </Grid>
                                <Grid item xs={12} sm={6} md={6}>
                                    <Typography variant="body1" className={classes.contactInformation__title}>График работы отдела продаж</Typography>
                                    <Typography variant="subtitle1" className={classes.contactInformation__description}>Пн-пт 09:00-19:00  Сб-нд 10:00-17:00</Typography>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box className={classes.contactInformation__map}>
                            <iframe
                                style={{ width: '100%', minHeight: 235}}
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6037.915709545883!2d30.51954531366951!3d50.48521589613792!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce02e4080bab%3A0x2b2f2b52535638e0!2z0JHQm9Ce0JrQkdCQ0KHQotCV0KA!5e0!3m2!1sru!2sua!4v1638457573745!5m2!1sru!2sua" allowFullScreen="" loading="lazy"></iframe>
                        </Box>
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <ContactForm onSubmit={handleSubmit} />
                    </Grid>
                </Grid>
            </Container>
        </ScreenLayout>
    )
}

export default ContactUsScreen