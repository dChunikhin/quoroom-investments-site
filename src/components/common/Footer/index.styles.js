import {makeStyles} from "@mui/styles";

export default makeStyles((theme) => {
    return {
        root: {
            backgroundColor: "#282C34",
            padding: "100px 0",
            [theme.breakpoints.down('md')]: {
                padding: "60px 0",
            },
        },
        wrapFooter: {
            display: "flex",
            alignItems: "center",
            "& > *": {
                flexBasis: "33.333%",
            },
            [theme.breakpoints.down('md')]: {
                display: "block",
            },
        },
        footerLink: {
            marginRight: "16px"
        },
        logo: {
            maxWidth: "130px"
        },
        copyright: {
            opacity: ".5",
            color: "#fff",
            textAlign: "right",
            [theme.breakpoints.down('md')]: {
                textAlign: "center"
            },
        },
        item: {
            display: "flex",
            justifyContent: "center",
            [theme.breakpoints.down('md')]: {
                margin: "34px 0",
            },
        }
    }
});