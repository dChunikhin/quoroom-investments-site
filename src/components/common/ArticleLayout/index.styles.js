import {makeStyles} from "@mui/styles"
import BG from "assets/abstract_bg.png"
export default makeStyles((theme) => {
    return {
        root: {
            padding: "154px 0 54px 0",
            backgroundColor: "#F8F8F8",
            backgroundImage: "url(" + BG + ")",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center right",
            backgroundSize: "100% 100%",
            [theme.breakpoints.down('md')]: {
                padding: "154px 0 24px 0",
            },
        },
        title: {
            marginTop: "24px",
            [theme.breakpoints.down('md')]: {
                fontSize: "24px"
            },
        }
    }
});