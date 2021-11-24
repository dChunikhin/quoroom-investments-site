import {makeStyles} from "@mui/styles"

export default makeStyles((theme) => {
    return {
        root: {},
        link: theme.mixins.link,
        screenLayout: {
            padding: "34px 0"
        },
        publishDate: {
            fontSize: "12px",
            color: "#fff",
            display: "inline",
            padding: "14px",
            background: "linear-gradient(90deg, rgba(247,172,114,1) 0%, rgba(198,148,95,1) 100%)"
        },
        img: {
            width: "100%",
            margin: "24px 0"
        },
        title: {
            marginBottom: "24px"
        },
        text: {},
        latestNewsTitle: {
            marginBottom: "20px",
        },
        latestArticle: {
            marginBottom: "24px",
        },
        latestArticleWrapperText: {
            flexDirection: "column-reverse",
            padding: "20px",
            [theme.breakpoints.down('sm')]: {
                marginTop: "0",
                padding: "14px 0",
            },
        },
        latestArticleTitle: {
            marginBottom: "0!important",
            [theme.breakpoints.down('sm')]: {
                color: "#000"
            },
        },
        latestArticleDescription: {
            display: "none"
        },
        latestArticleImg: {
            minHeight: "auto",
        },
        latestArticleDate: {
            marginBottom: "10px",
            [theme.breakpoints.down('sm')]: {
                color: "#000",
                marginBottom: "4px",
            },
        }
    }
});