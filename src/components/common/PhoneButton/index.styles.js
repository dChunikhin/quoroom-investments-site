import {makeStyles} from "@mui/styles"

export default makeStyles((theme) => {
    return {
        root: {
            backgroundColor: "rgba(247, 172, 114, .3)",
            padding: "5px",
            borderRadius: "100%",
            maxWidth: "164px",
            height: "164px",
            display: "none",
            justifyContent: "center",
            alignItems: "center",
            [theme.breakpoints.down('md')]: {
                maxWidth: "54px",
                height: "54px",
                position: "absolute",
                top: "50%",
                right: "24px",
                transform: "translate(0, -50%)",
                display: "flex"
            },
        },
        circle2: {
            backgroundColor: "rgba(247, 172, 114, .3)",
            padding: "24px",
            borderRadius: "100%",
            maxWidth: "100%",
            maxHeight: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

        },
        circle3: {
            backgroundColor: "rgba(247, 172, 114, 1)",
            padding: "24px",
            borderRadius: "100%",
            maxWidth: "80%",
            maxHeight: "80%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            [theme.breakpoints.down('md')]: {
                padding: "12px",
            },
        },
        ico: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            [theme.breakpoints.down('md')]: {
                width: "12px",
                height: "12px"
            },
        }
    }
});