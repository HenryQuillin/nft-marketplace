import CollectionCard from "./CollectionCard"
import { Grid, Box, CircularProgress, Pagination } from "@mui/material"
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import CollectionsAppBar from "./CollectionsAppBar"
import getCollectionsData from "../../api/getCollectionsData"

export default function Collections() {
  const navigate = useNavigate()
  const [collectionsData, setCollectionsData] = useState(undefined)
  const [filter, setFilter] = useState("")
  const [totalCollections, setTotalCollections] = useState()
  const itemsPerPage = 25

  useEffect(() => {
    getCollectionsData(setCollectionsData, setTotalCollections)
  }, [])

  const handleSearchChange = (e) => {
    setFilter(e.target.value)
  }
  const handleChangePage = (event, value) => {
    const start = value * 25
    const end = start + 25
    getCollectionsData(setCollectionsData, setTotalCollections, start, end)
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
      <Box sx={{ p: 1 }}>
        <Pagination
          onChange={handleChangePage}
          count={totalCollections && Math.floor(totalCollections / itemsPerPage)}
          variant="outlined"
          color="primary"
        />
      </Box>

      {collectionsData ? (
        <Grid container spacing={2}>
          {Object.keys(collectionsData).map(
            (collectionId) =>
              collectionsData[collectionId].name.includes(filter) &&
              getCollectionCard(collectionId)
          )}
        </Grid>
      ) : (
        <Box
          data-testid="circularProgress"
          sx={{ textAlign: "center", marginTop: 17 }}
        >
          <CircularProgress />
        </Box>
      )}
    </div>
  )
}
