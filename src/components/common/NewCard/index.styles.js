import {makeStyles} from "@mui/styles"

export default makeStyles((theme) => {
    return {
        root: {
            cursor: "pointer",
            backgroundColor: "rgba(40, 44, 52, 1)",
            position: "relative",
            marginBottom: "40px",
            "&:hover": {
                "& $wrapperText": {
                    bottom: "3%",
                    opacity: "1",
                    borderBottom: "6px solid #F7AC72"
                }
            },
        },
        img: {
            width: "100%",
            minHeight: "400px"
        },
        wrapperText: {
            textAlign: "left",
            position: "absolute",
            right: "3%",
            bottom: "3%",
            transform: "translate(1.5%, 0)",
            padding: "34px",
            backgroundColor: "#25252D",
            maxWidth: "80%",
            borderBottom: "4px solid #F7AC72",
            transition: "0.3s",
            opacity: "0.9",
            [theme.breakpoints.down('md')]: {
                maxWidth: "91%",
            },
            [theme.breakpoints.down('sm')]: {
                position: "relative",
                left: "0",
                top: "0",
                backgroundColor: "transparent",
                padding: "0",
            },

        },
        title: {
            color: "#fff",
            fontWeight: "300",
            marginBottom: "24px"
        },
        description: {
            color: "#fff",
            opacity: ".55",
            marginBottom: "24px"
        },
        date: {
            color: "#fff",
            opacity: ".55",
            fontWeight: "300"
        },

    }
});