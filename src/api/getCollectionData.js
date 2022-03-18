import axios from "axios"

export default function getCollectionData(setCollectionData, collectionName) {
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
}
