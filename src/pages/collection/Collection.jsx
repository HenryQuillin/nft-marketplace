import React from 'react'
import { useParams } from 'react-router-dom'

export default function Collection() {
  const { collectionId } = useParams()
  return <div>{`Collection ${collectionId} `}</div>

  // return <div>Collection</div>
}
