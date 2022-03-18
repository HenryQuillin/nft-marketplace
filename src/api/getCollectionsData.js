import axios from "axios"

export default async function getCollectionsData(
  setCollectionsData,
  setTotalCollections,
  _startInclusive = 26,
  _endExclusive = 51,
  _collectionsType = "all"
) {
  setCollectionsData(undefined)

  const response = await axios.get(`https://ftx.us/api/nft/collections_page`, {
    params: {
      startInclusive: _startInclusive,
      endExclusive: _endExclusive,
      collectionsType: _collectionsType,
    },
  })
  const { data } = response

  const { result } = data
  console.log(result)

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
}
