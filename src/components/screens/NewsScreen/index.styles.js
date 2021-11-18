import {makeStyles} from "@mui/styles"
import ArrowSlider from "../../../assets/right_arrow.png"

export default makeStyles((theme) => {
    return {
        root: {
            backgroundColor: "#25252D"
        },
        title: {
            color: "#fff",
            [theme.breakpoints.down('md')]: {
                fontSize: "24px"
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

    }
});