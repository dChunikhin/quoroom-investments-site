

import {makeStyles} from "@mui/styles";


export default makeStyles((theme) => {
    return {
        root: { },
        wrapImg: {
            position: "relative",
            '&::before': {
                content: '""',
                display: "block",
                backgroundColor: "rgba(247, 172, 114, 1)",
                width: "90px",
                height: "90px",
                position: "absolute",
                left: "-10px",
                top: "-10px",
                zIndex: "-1"
            },
        },
        img: {
            width: "100%"
        },
        about: {
            padding: "50px 0 0 60px",
            [theme.breakpoints.down('lg')]: {
                padding: "0px 0 0 20px"
            },
            [theme.breakpoints.down('md')]: {
                padding: "30px 0 0 0"
            },
        },
        title: {
            marginBottom: "24px",
            [theme.breakpoints.down('md')]: {
                fontSize: "24px"
            },
        },
        description: {
            marginBottom: "40px"
        },
        advantages: {
            marginBottom: "24px"
        },
        advantages__title: {
            position: "relative",
            padding: "0 0 0 24px",
            marginBottom: "40px",
            verticalAlign: "center",
            minHeight: "44px",
            borderLeft: "1px solid rgba(247, 172, 114, 1)",
            [theme.breakpoints.down('md')]: {
                fontSize: "16px",
                fontWeight: "800",
                marginBottom: "24px",
                paddingTop: "12px"
            },
            [theme.breakpoints.down('lg')]: {
                marginBottom: "24px"
            },
        },
        button__wrap: {
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center"
        },
        button__text: {
            color: "rgba(247, 172, 114, 1)",
            marginRight: "30px"
        },
        button__icon: {
            width: "50px",
            height: "15px"
        }
    }
});