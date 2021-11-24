import {makeStyles} from "@mui/styles"

export default makeStyles((theme) => {
    return {
        root: {
            cursor: "pointer",
            backgroundColor: "rgba(40, 44, 52, 1)",
            position: "relative",
            "&:hover": {
                "& $wrapperText": {
                    bottom: "3%",
                    opacity: "1",
                    borderBottom: "6px solid #F7AC72"
                }
            },
            [theme.breakpoints.down('sm')]: {
                backgroundColor: "rgba(40, 44, 52, 0)",

            },
        },
        img: {
            width: "100%",
            minHeight: "400px",
            [theme.breakpoints.down('sm')]: {
                borderBottom: "4px solid #F7AC72",
                minHeight: "100%",
            },
        },
        wrapperText: {
            textAlign: "left",
            position: "absolute",
            right: "3%",
            bottom: "3%",
            transform: "translate(1.5%, 0)",
            padding: "34px",
            backgroundColor: "rgba(37, 37, 45, 1)",
            maxWidth: "80%",
            borderBottom: "4px solid #F7AC72",
            transition: "0.3s",
            opacity: "0.9",
            display: "flex",
            flexDirection: "column",
            [theme.breakpoints.down('sm')]: {
                position: "relative",
                left: "0",
                top: "0",
                backgroundColor: "rgba(37, 37, 45, 0)",
                padding: "0",
                marginTop: "14px",
                borderBottom: "0px solid #F7AC72",
                flexDirection: "column-reverse",
                maxWidth: "100%",
            },

        },
        title: {
            color: "#fff",
            fontWeight: "600",
            marginBottom: "24px!important",
            [theme.breakpoints.down('sm')]: {
                fontSize: "18px",
                width: "100%"
            },
        },
        description: {
            color: "#fff",
            opacity: ".55",
            marginBottom: "24px",
            [theme.breakpoints.down('sm')]: {
                display: "none",
            },
        },
        date: {
            color: "#fff",
            opacity: ".55",
            fontWeight: "300",
            [theme.breakpoints.down('sm')]: {
                marginBottom: "14px"
            },
        },

    }
});