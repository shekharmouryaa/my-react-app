import React, { useEffect } from 'react'
import { MediaCard } from '../components/MediaCard'
import { getApiData } from '../API/apis'

export const Series = () => {

  const [media, setMediaData] = React.useState([])

  useEffect(() => {
    getApiData(setMediaData)
  }, [])

  return (
    <div className='container'>
      <h1 className='text-center my-2'>Series</h1>
      <div className='row'>
        {media.filter(media => media?.programType === 'series').map(items => {
          return (<MediaCard items={items} />)
        })}
      </div>
    </div>
  )
}
