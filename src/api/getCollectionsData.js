import axios from "axios"

export default function getCollectionsData(
    setCollectionsData,
    setTotalCollections,
  _startInclusive = 25,
  _endExclusive = 50,
  _collectionsType = "all"
) {
  console.log("getData called")
  setCollectionsData(undefined)

  axios
    .get(`https://ftx.us/api/nft/collections_page`, {
      params: {
        startInclusive: _startInclusive,
        endExclusive: _endExclusive,
        collectionsType: _collectionsType,
      },
    })
    .then(function (response) {
      const { data } = response
      console.log(data)
      const { result } = data
      setTotalCollections(result.count)
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

