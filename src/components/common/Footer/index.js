import styles from './index.styles'
import React from "react"
import {Typography, Box, Container, Link} from "@mui/material"
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import TelegramIcon from '@mui/icons-material/Telegram'
import Logo from "assets/logo.png"

const Footer = () => {
    const classes = styles()
  return(
      <Box className={classes.root}>
          <Container className={classes.wrapFooter}>
              <Box className={classes.item}>
                  <Link className={classes.footerLink}>
                      <InstagramIcon fontSize="large"/>
                  </Link>
                  <Link className={classes.footerLink}>
                      <FacebookIcon fontSize="large"/>
                  </Link>
                  <Link className={classes.footerLink}>
                      <TelegramIcon fontSize="large"/>
                  </Link>
              </Box>
              <Box className={classes.item}>
                  <Link>
                      <img className={classes.logo} src={Logo} alt=""/>
                  </Link>
              </Box>
              <Typography className={classes.copyright}>© 2021 Quoroom. All rights reserved</Typography>
          </Container>
      </Box>
  )
}
export default Footer