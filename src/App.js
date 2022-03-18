import React from "react"
import { CssBaseline } from "@mui/material"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ThemeProvider } from "@mui/material/styles"
import Collection from "./pages/collection/Collection"
import Collections from "./pages/collections/Collections"
import theme from "./theme"
import Header from "./pages/app/Header"
import NftPage from "./pages/nft/NftPage"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Collections />} />
          <Route path="/:collectionName" element={<Collection />} />
          <Route path="/:collectionName/:nftId" element={<NftPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
