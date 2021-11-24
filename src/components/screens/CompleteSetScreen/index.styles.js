import {makeStyles} from "@mui/styles"

export default makeStyles((theme) => {
    return {
        root: {
            backgroundColor: "#F3F4F7"
        },
        title: {
            marginBottom: "34px",
            [theme.breakpoints.down('md')]: {
                fontSize: "24px"
            }
        },
        description: {
            marginBottom: "40px",
            maxWidth: "50%",
            [theme.breakpoints.down('lg')]: {
                maxWidth: "100%",
            }
        }
    }
});