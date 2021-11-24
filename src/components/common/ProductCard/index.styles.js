import {makeStyles} from "@mui/styles"

export default makeStyles((theme) => {
    return {
        root: {
            backgroundColor: "#F3F4F7",
            padding: "60px 0",

        },
        container: {
            display: "flex",
            alignItems: "center",

        },
        sliderImage: {
            width: "100%",
        },
        productGallery: {
        },
        productInformation: {
            backgroundColor: "#fff",
            padding: "48px",
            boxSizing: "border-box",
            [theme.breakpoints.down('md')]: {
                width: "100%"
            }
        },
        row: {
            marginBottom: "14px"
        },
        title: {
            color: "#8E8E8E"
        },
        range: {
            marginTop: "30px",
            marginBottom: "14px"
        },
        price: {
            marginBottom: "30px"
        }
    }
});