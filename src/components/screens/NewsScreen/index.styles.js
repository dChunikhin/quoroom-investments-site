import {makeStyles} from "@mui/styles"
import ArrowSlider from "../../../assets/right_arrow.png"

export default makeStyles((theme) => {
    return {
        root: {
            backgroundColor: "#25252D"
        },
        link: theme.mixins.link,
        title: {
            color: "#fff",
            [theme.breakpoints.down('md')]: {
                fontSize: "18px",
                fontWeight: "400"
            },
        },
        button__wrap: {
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center"
        },
        topSection: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "75px",
            [theme.breakpoints.down('md')]: {
                marginBottom: "34px",
            },
        },
        buttonTop: {
            [theme.breakpoints.down('sm')]: {
                display: "none",
            },
        },
        buttonBottom: {
            display: "none",
            [theme.breakpoints.down('sm')]: {
                display: "flex",
                marginTop: "24px"
            },
        }

    }
});