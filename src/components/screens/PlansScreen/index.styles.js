import {makeStyles} from "@mui/styles"

export default makeStyles((theme) => {
    return {
        root: {},
        link: theme.mixins.link,
        title: {
            marginBottom: "34px",
            [theme.breakpoints.down('md')]: {
                fontSize:"24px"
            },
        },
        image: {
            width: "100%"
        }
    }
});