import {
  Toolbar,
  AppBar,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CircularProgress,
  CardActionArea,
} from "@mui/material"
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import theme from "../../theme"

export default function Collections() {
  const navigate = useNavigate()
  const [collectionData, setCollectionData] = useState({})
  // const [filter, setFilter] = useState("")

  useEffect(() => {
    axios
      .get(`https://ftx.us/api/nft/collections_page`, {
        params: { startInclusive: 2, endExclusive: 20, collectionsType: "all" },
      })
      .then(function (response) {
        console.log(response)
        const { data } = response
        const { result } = data
        console.log(result)
        const newCollectionData = {}
        result.collections.forEach((collection, index) => {
          newCollectionData[index] = {
            id: collection.collectionDict.id,
            name: collection.group_id,
            sprite: collection.first_nft.imageUrl,
            total: collection.total,
          }
        })
        setCollectionData(newCollectionData)
      })
  }, [])
  // const handleSearchChange = (e) => {
  //   setFilter(e.target.value)
  // }

  const getCollectionCard = (collectionId) => {
    const { id, name, sprite, total } = collectionData[collectionId]
    return (
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={collectionId}>
        <Card onClick={() => navigate(`/${id}`)}>
          <CardActionArea>
            <div
              style={{
                width: "100%",
                minWidth: "173px",
                height: "0px",
                paddingBottom: "100%",
                overflow: "hidden",
              }}
            >
              <CardMedia
                image={sprite}
                component="img"
                alt="green iguana"
                // height="100%"
                // width="100%"
              />
            </div>
            <CardContent sx={{ p: 2 }}>
              <Typography variant="h5">{`${name}`}</Typography>
              <Grid
                container
                spacing={2}
                sx={{ mt: 2 }}
                style={{
                  marginTop: "16px;",
                  display: "flex;",
                  flexWrap: "nowrap;",
                  alignItems: "flex-end;",
                }}
              >
                <Grid
                  item
                  xs={6}
                  style={{ display: "flex;", flexDirection: "column;" }}
                >
                  <Typography variant="h6" color={theme.palette.text.secondary}>
                    NFTs
                  </Typography>
                  <Typography variant="h5">{`${total}`}</Typography>
                </Grid>
                <Grid
                  item
                  xs={6}
                  style={{ display: "flex;", flexDirection: "column;" }}
                >
                  <Typography variant="h6" color={theme.palette.text.secondary}>
                    Floor Price
                  </Typography>
                  <Typography variant="h5">{`${total}`}</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    )
  }
  return (
    <div>
      <AppBar position="static">
        <Toolbar />
      </AppBar>
      {collectionData ? (
        <Grid container spacing={2}>
          {Object.keys(collectionData).map((collectionId) =>
            getCollectionCard(collectionId)
          )}
        </Grid>
      ) : (
        <CircularProgress />
      )}
    </div>
  )
}
