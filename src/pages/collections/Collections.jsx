import CollectionCard from "../../components/CollectionCard"
import { Grid, Box, CircularProgress, Pagination } from "@mui/material"
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import CollectionsAppBar from "./CollectionsAppBar"
import { ConstructionOutlined } from "@mui/icons-material"

export default function Collections() {
  const navigate = useNavigate()
  const [collectionsData, setCollectionsData] = useState(undefined)
  const [filter, setFilter] = useState("")
  const [dataRange, setDataRange] = useState({
    startInclusive: 0,
    endExclusive: 25,
  })

  const getData = () => {
    console.log("getData called")
    setCollectionsData(undefined)

    axios
      .get(`https://ftx.us/api/nft/collections_page`, {
        params: {
          startInclusive: dataRange ? dataRange.startInclusive : 0,
          endExclusive: dataRange ? dataRange.endExclusive : 25,
          collectionsType: "all",
        },
      })
      .then(function (response) {
        const { data } = response
        console.log(data)
        const { result } = data
        const newCollectionsData = {}
        result.collections.forEach((collection, index) => {
          newCollectionsData[index] = {
            id: collection.collectionDict.id,
            name: collection.collectionDict.name,
            sprite: collection.first_nft.imageUrl,
            total: collection.total,
            floor: collection.first_nft.offerPrice,
            currency: collection.first_nft.quoteCurrency,
          }
        })
        setCollectionsData(newCollectionsData)
      })
  }

  useEffect(() => {
    getData()
  }, [])

  const handleSearchChange = (e) => {
    setFilter(e.target.value)
  }
  const handleChangePage = (event, value) => {
    const start = value * 25
    const end = start + 25
    console.log(dataRange)

    setDataRange({
      startInclusive: start,
      endExclusive: end,
    })
    getData()
    console.log(dataRange)
  }

  const getCollectionCard = (collectionId) => {
    const { name, sprite, total, floor, currency } =
      collectionsData[collectionId]
    return (
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={collectionId}>
        <CollectionCard
          navigate={navigate}
          name={name}
          sprite={sprite}
          total={total}
          floor={floor}
          currency={currency}
        />
      </Grid>
    )
  }
  return (
    <div>
      <CollectionsAppBar handleSearchChange={handleSearchChange} />
      <Pagination
        onChange={handleChangePage}
        count={10}
        variant="outlined"
        color="primary"
      />

      {collectionsData ? (
        <Grid container spacing={2}>
          {Object.keys(collectionsData).map(
            (collectionId) =>
              collectionsData[collectionId].name.includes(filter) &&
              getCollectionCard(collectionId)
          )}
        </Grid>
      ) : (
        <Box sx={{ textAlign: "center", marginTop: 17 }}>
          <CircularProgress />
        </Box>
      )}
    </div>
  )
}
