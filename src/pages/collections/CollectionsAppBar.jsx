import * as React from "react"
import { styled, alpha } from "@mui/material/styles"
import { AppBar, Box, Toolbar, Typography, InputBase } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import theme from "../../theme"

const Search = styled("div")(() => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#464B54",
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  color: "#A2A5A9",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}))

const SearchIconWrapper = styled("div")(() => ({
  padding: theme.spacing(0, 2),
  color: "white",
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}))

const StyledInputBase = styled(InputBase)(() => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}))

export default function PrimarySearchAppBar({ handleSearchChange }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h5"
            noWrap
            sx={{
              color: theme.palette.text.primary,
              display: { xs: "none", sm: "block" },
            }}
          >
            NFT Collections
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              onChange={handleSearchChange}
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
