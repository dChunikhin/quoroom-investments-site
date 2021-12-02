import styles from './index.styles';


import React from 'react';
import { useFormik } from 'formik';
import { Button, FormControl, MenuItem, Select, TextField, InputLabel, Box, Typography } from "@mui/material";

import schema from './index.scheme';
import {ButtonWithArrow} from "../../common";

const ContactForm = ({ onSubmit }) => {

    const classes = styles();

    const formik = useFormik({
        initialValues: {
            name: '',
            phoneNumber: '',
            message: '',
        },
        validationSchema: schema,
        onSubmit: (values) => onSubmit(values, () => formik.resetForm())

    })

    return (
        <Box className={classes.root}>
            <form onSubmit={formik.handleSubmit} className={classes.form}>
                <Typography className={classes.title}>
                    Оставьте заявку и мы свяжемся с вами ближайшее время
                </Typography>
                <TextField
                    InputProps={{
                        className: classes.input,
                    }}
                    InputLabelProps={{
                        className: classes.input,
                    }}
                    size={"small"}
                    variant="standard"
                    className={classes.field}
                    fullWidth
                    name="name"
                    label="Введите Имя"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                />
                <TextField
                    InputProps={{
                        className: classes.input,
                    }}
                    InputLabelProps={{
                        className: classes.input,
                    }}
                    size={"small"}
                    variant="standard"
                    className={classes.field}
                    fullWidth
                    name="phoneNumber"
                    label="Введите ваш телефон"
                    value={formik.values.phoneNumber}
                    onChange={formik.handleChange}
                    error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
                    helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
                />
                <TextField
                    InputProps={{
                        className: classes.input,
                    }}
                    InputLabelProps={{
                        className: classes.input,
                    }}
                    size={"small"}
                    variant="standard"
                    className={classes.field}
                    fullWidth
                    name="message"
                    label="Задайте ваш вопрос"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    error={formik.touched.message && Boolean(formik.errors.message)}
                    helperText={formik.touched.message && formik.errors.message}
                />
                <ButtonWithArrow
                    text={"Отправить"}
                    extraClasses={{root:classes.button}}
                />
                {/*<Button type={'submit'} size={'large'} color="primary" variant="contained" className={classes.button}>Отправить</Button>*/}
            </form>
        </Box>
    )
};

export default ContactForm;