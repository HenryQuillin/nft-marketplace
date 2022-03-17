import React from "react"
import header from "../../assets/header.png"
import { Box } from "@mui/material"

export default function Header() {
  return (
    <div>
      <Box
        component="img"
        sx={{
          height: 62,
          width: 1425,
        }}
        alt="The house from the offer."
        src={header}
      />
      {/* <SearchBar/> */}
    </div>
  )
}
