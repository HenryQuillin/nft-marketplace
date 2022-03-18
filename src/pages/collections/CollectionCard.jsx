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

export default function CollectionCard({
  name,
  sprite,
  total,
  floor,
  currency,
}) {
  const navigate = useNavigate()
  return (
    <Card data-testid="collection-card" onClick={() => navigate(`/${name}`)}>
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
          <CardMedia image={sprite} component="img" alt={`image of ${name}`} />
        </div>
        <CardContent
          sx={{
            p: 2,
          }}
        >
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
                NFTs
              </Typography>
              <Typography variant="h5">{`${total}`}</Typography>
            </Grid>
            {floor ? (
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
                    Floor Price
                  </Typography>
                  <Typography variant="h5">
                    {`${floor}`}{" "}
                    <span
                      style={{
                        color: theme.palette.text.secondary,
                        fontSize: "1rem",
                      }}
                    >{`${currency}`}</span>
                  </Typography>
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
