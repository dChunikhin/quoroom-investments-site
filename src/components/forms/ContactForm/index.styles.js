import {makeStyles} from "@mui/styles";

export default makeStyles((theme) => {
    return {
        root: {
            backgroundColor: "rgba(41, 41, 41, 1)",
            padding: "60px",
            marginLeft: "50px",
            borderBottom: "4px solid #F7AC72",
            [theme.breakpoints.down('md')]: {
                marginLeft: "0px",
                padding: "34px"
            },

        },
        title: {
            fontWeight: "300",
            fontSize: "24px",
            color: "#fff",
            width: "95%",
            marginBottom: "24px"
        },
        button: {
            marginTop: "20px"
        },
        field: {
            marginBottom: "16px",

        },
        input: {
            color: "#fff",
            opacity: ".4",
            fontWeight: "300",
            paddingBottom: "14px"
        }
    }
});