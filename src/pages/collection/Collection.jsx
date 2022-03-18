import {
  Toolbar,
  AppBar,
  Grid,
  CircularProgress,
  Box,
  Typography,
} from "@mui/material"
import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import NftCard from "../../components/NftCard"
import theme from "../../theme"

// import theme from "../../theme"

export default function Collection() {
  const navigate = useNavigate()
  const { collectionName } = useParams()
  const [collectionData, setCollectionData] = useState(undefined)

  useEffect(() => {
    axios
      .get(`https://ftx.us/api/nft/nfts_filtered`, {
        params: {
          nft_filter_string: { collection: `${collectionName}` },
        },
      })
      .then(function (response) {
        const { data } = response
        console.log(data)

        const { result } = data
        const newCollectionData = {}
        result.nfts.forEach((nft, index) => {
          newCollectionData[index] = {
            id: nft.id,
            name: nft.name,
            image: nft.imageUrl,
            offerPrice: nft.offerPrice,
            collectionName: nft.collection,
            highestBid: nft.highestBid,
            currency: nft.quoteCurrency,
          }
        })
        setCollectionData(newCollectionData)
      })
  }, [])

  const getNftCard = (nftId) => {
    return (
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={nftId}>
        <NftCard {...collectionData[nftId]} />
      </Grid>
    )
  }

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography color={theme.palette.text.primary} variant="h5">
            <a href="/">Collections</a>
            &gt;  
            {` ${collectionName} `}
          </Typography>
        </Toolbar>
      </AppBar>

      {collectionData === undefined && (
        <Box textAlign="center" paddingTop={10}>
          <CircularProgress />
        </Box>
      )}
      {collectionData !== undefined && collectionData && (
        <Grid container spacing={2}>
          {Object.keys(collectionData).map((nftId) => getNftCard(nftId))}
        </Grid>
      )}
      {collectionData && Object.keys(collectionData).length === 0 && (
        <div>
          <Box textAlign="center" mt={10}>
            <Typography variant="h5">
              Sorry, this collection contains no listed NFTs:(
            </Typography>
            <Box
              component="img"
              sx={{ pt: 3 }}
              alt="header"
              src="https://c.tenor.com/1raYW_MZrMwAAAAM/dog-cute.gif"
            />
          </Box>
        </div>
      )}
    </div>
  )
}
