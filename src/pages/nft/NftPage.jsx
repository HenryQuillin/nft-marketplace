import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import getNftData from "../../api/getNftData"
import { Box, Grid, Paper } from "@mui/material"
import NftDetails from "./NftDetails"

export default function NftPage() {
  const { nftId, collectionName } = useParams()
  const [nftData, setNftData] = useState()

  useEffect(() => {
    getNftData(setNftData, collectionName, nftId)
  }, [])

  return (
    <Box
      sx={{
        paddingTop: 6,
        marginTop: 18,
        maxWidth: "1440px",
        marginLeft: "auto",
        marginRight: "auto",
        paddingLeft: 10,
        paddingRight: 10,
      }}
    >
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={5} lg={5}>
          <Paper sx={{ overflow: "hidden", height: "inherit" }}>
            <Box
              component="img"
              src={nftData && nftData.imageUrl}
              alt={`${nftData && nftData.name}`}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                maxWidth: "100%",
              }}
            />
          </Paper>
          <NftDetails nftData={nftData} />
        </Grid>
      </Grid>
    </Box>
  )
}
