import {
  Toolbar,
  AppBar,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material"
import React from "react"

const getCollectionCard = () => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Card>
        <CardMedia image="" style={{ width: "130px", height: "130px" }} />
        <CardContent>
          <Typography>Card</Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}
export default function Collections() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar />
      </AppBar>
      <Grid container spacing={2} sx={{ p: 2 }}>
        {getCollectionCard()}
        {getCollectionCard()}
        {getCollectionCard()}
        {getCollectionCard()}
        {getCollectionCard()}
      </Grid>
    </div>
  )
}
