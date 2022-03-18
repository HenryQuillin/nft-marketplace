import React from "react"
import header from "../../assets/header.png"
import header2 from "../../assets/header2.png"
import { Box } from "@mui/material"

export default function Header() {
  return (
    <Box sx={{ overflow: "hidden" }}>
      <Box
        component="img"
        sx={{ hieght: "55px", width: "750px" }}
        alt="header"
        src={header}
      />
      <Box
        display={{ lg: "block", md: "none", sm: "none", xs: "none" }}
        component="img"
        sx={{ hieght: "55px", width: "360px", float: "right", pt: 0.5 }}
        alt="header"
        src={header2}
      />
    </Box>
  )
}
