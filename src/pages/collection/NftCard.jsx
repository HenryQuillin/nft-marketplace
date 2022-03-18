import React from "react"
import {
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
} from "@mui/material"
import theme from "../../theme"
import { useNavigate } from "react-router-dom"

export default function NftCard({
  collectionName,
  name,
  id,
  offerPrice,
  highestBid,
  image,
  currency,
}) {
  const navigate = useNavigate()
  return (
    <Card onClick={() => navigate(`./${id}`)}>
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
          <CardMedia image={image} component="img" alt={`image of ${name}`} />
        </div>
        <CardContent
          sx={{
            p: 2,
          }}
        >
          <Typography
            variant="h6"
            color={theme.palette.text.secondary}
          >{`${collectionName}`}</Typography>
          <Typography
            variant="h5"
            sx={{
              whiteSpace: "nowrap",
            }}
          >{`${name}`}</Typography>
          <Grid
            container
            spacing={2}
            sx={{
              mt: 2,
            }}
            style={{
              marginTop: "16px",
              display: "flex",
              flexWrap: "nowrap",
              alignItems: "flex-end",
            }}
          >
            <Grid
              item
              xs={6}
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography variant="h6" color={theme.palette.text.secondary}>
                Price
              </Typography>
              <Typography variant="h5">
                {`${offerPrice} `}
                <span
                  style={{
                    color: theme.palette.text.secondary,
                    fontSize: "1rem",
                  }}
                >{`${currency}`}</span>
              </Typography>
            </Grid>
            {highestBid ? (
              <div>
                {" "}
                <Grid
                  item
                  xs={6}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    whiteSpace: "nowrap",
                  }}
                >
                  <Typography
                    variant="h6"
                    color={theme.palette.text.secondary}
                    sx={{
                      whiteSpace: "pre",
                    }}
                  >
                    Highest Bid
                  </Typography>
                  <Typography variant="h5">{`${highestBid}`}</Typography>
                </Grid>
              </div>
            ) : (
              ""
            )}
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
