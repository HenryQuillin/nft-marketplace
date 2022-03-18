import React from "react"
import theme from "../../theme"
import { Grid, Paper, Typography } from "@mui/material"

export default function NftDetails({ nftData }) {
  return (
    <Paper
      sx={{
        marginTop: 2,
        borderRadius: 2,
        p: 1,
      }}
    >
      <Typography variant="h5">NFT Details</Typography>
      <Grid container>
        <Grid item xs={6}>
          <Typography variant="h6" color={theme.palette.text.secondary}>
            Name
          </Typography>
          <Typography variant="h6B" color={theme.palette.text.primary}>
            {nftData && nftData.name}
          </Typography>
          <Typography variant="h6" color={theme.palette.text.secondary}>
            Collection
          </Typography>
          <Typography variant="h6B" color={theme.palette.text.primary}>
            {nftData && nftData.collection}
          </Typography>
          <Typography variant="h6" color={theme.palette.text.secondary}>
            Number
          </Typography>
          <Typography variant="h6B" color={theme.palette.text.primary}>
            {nftData && nftData.number}
          </Typography>
          <Typography variant="h6" color={theme.palette.text.secondary}>
            Currency
          </Typography>
          <Typography variant="h6B" color={theme.palette.text.primary}>
            {nftData && nftData.quoteCurrency}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6" color={theme.palette.text.secondary}>
            Issuer
          </Typography>
          <Typography variant="h6B" color={theme.palette.text.primary}>
            {nftData && nftData.issuer}
          </Typography>
          <Typography variant="h6" color={theme.palette.text.secondary}>
            Series
          </Typography>
          <Typography variant="h6B" color={theme.palette.text.primary}>
            {nftData && nftData.series}
          </Typography>
          <Typography variant="h6" color={theme.palette.text.secondary}>
            Redeemable
          </Typography>
          <Typography variant="h6B" color={theme.palette.text.primary}>
            {nftData && (nftData.redeemable ? "Yes" : "No")}
          </Typography>
          <Typography variant="h6" color={theme.palette.text.secondary}>
            Trading Fees
          </Typography>
          <Typography
            variant="h6B"
            sx={{ fontSize: ".85rem" }}
            color={theme.palette.text.primary}
          >
            {nftData &&
              `${nftData.royaltyFeeRate}% Royalty, ${nftData.totalSellerFeeRate}% Seller Fee`}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  )
}
