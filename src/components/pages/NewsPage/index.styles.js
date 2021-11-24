import {makeStyles} from "@mui/styles"

export default makeStyles((theme) => {
    return {
        root: {},
        link: theme.mixins.link,
        screenLayout: {
            padding: "34px 0"
        },
        title: {
            [theme.breakpoints.down('sm')]: {
                color: "#000",
                fontWeight: "600"
            },
        },
        date: {
            [theme.breakpoints.down('sm')]: {
                color: "#000"
            },
        }
    }
});