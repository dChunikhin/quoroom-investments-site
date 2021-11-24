import {makeStyles} from "@mui/styles"

export default makeStyles((theme) => {
    return {
        root: {
            backgroundColor: "#fff",
            padding: "30px",
            borderBottom: "2px solid #F7AC72",
            position: "relative",
            marginLeft: "16px",
            marginBottom: "16px"
        },
        checkImgWrapper: {
            position: "absolute",
            top: "20px",
            left: "-16px",
            display: "block",
            width: "32px",
            height: "32px",
            backgroundColor: "#F7AC72",
            BoxShadow: "0px 9px 14px 0px rgba(201, 149, 96, 0.16)"
        },
        checkImg: {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)"
        },
        imgWrapper: {
            marginBottom: "24px"
        }
    }
});