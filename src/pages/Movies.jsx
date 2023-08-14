/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { MediaCard } from '../components/MediaCard'
import { getApiData } from '../API/apis'

export const Movies = () => {

  const [media, setMediaData] = React.useState([])
  const [keyword, setKeyword] = useState("")
  const [filterData, setFilterData] = useState([])

  useEffect(()=>{
    let data = media.filter(media => media?.programType === 'movie')
    setFilterData(data)
  },[media])

  useEffect(() =>{
    if(keyword){
      const searchData = filterData?.filter( item => item?.title?.toLowerCase().includes(keyword?.toLowerCase()))
      setFilterData(searchData)
    }else{
      let data = media.filter(media => media?.programType === 'movie')
      setFilterData(data)
    }
  },[keyword])

  useEffect(() => {
    getApiData(setMediaData)
  }, [])

  
  return (
    <div className='container'>
      <h1 className='text-center my-2' >Movies</h1>
      <div>
      <input className='p-2' type='text' placeholder='Search...' name={"keyword"} value={keyword}
       onChange={(e)=> setKeyword(e.target.value)} />
      </div>
      <div className='row'>
        {filterData.map(items => {
          return (<MediaCard items={items}/>)
        })}
      </div>
    </div>
  )
}
