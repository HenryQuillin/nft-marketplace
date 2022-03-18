import axios from "axios"

export default function getCollectionData(setNftData, collectionName, nftId) {
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
      const res = result.nfts.filter((nft) => nft.id === nftId)[0]
      console.log(res)
      setNftData(res)
    })
}
