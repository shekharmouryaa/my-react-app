/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
import { getApiData } from '../API/apis'
import { MediaCard } from '../components/MediaCard'

export const Welcome = () => {

  const [media, setMediaData] = useState([])
  const [mediaType, setMediaType] = useState("all")
  const [filterData, setFilterData] = useState([])
  const [keyword, setKeyword] = useState("")

   // API CALL
   useEffect(() => {
    getApiData(setMediaData)
  }, [])

  // Media Data set into filerData
  useEffect(()=>{
    setFilterData(media)
  },[media])

  // Filter Data by media type // program type

  useEffect(()=>{
    const filterMedia = media.filter(item => {
      if(mediaType === "all"){
        return item
      }else{
        return item.programType === mediaType
      }
    })

    // Another Way

    // const filterMedia = media.filter(item => {
    //   if(mediaType === "movie"){
    //     return item.programType === "movie"
    //   }else if(mediaType === "series"){
    //     return item.programType === "series"
    //   }else {
    //     return item
    //   }
    // })
    setFilterData(filterMedia)
  },[mediaType,media])

 
  // search media by name

  useEffect(() =>{
    if(keyword){
      const searchData = filterData?.filter( item => item?.title?.toLowerCase().includes(keyword?.toLowerCase()))
      setFilterData(searchData)
    }else{
      let data = media.filter(item =>{
        if(mediaType === "all"){
          return item
        }else{
          return item.programType === mediaType
        }
      })
      setFilterData(data)
    }
  },[keyword,mediaType,media])

  const filterProgramType = (mediatype) =>{
    setMediaType(mediatype)
    setKeyword("")
  } 
  // Below code used for add className dynamic
  // {`anchor ${mediaType === "all" ? 'selected': ""}`}

   return (
    <div className='container'>
     <div className='row my-4 align-items-center'>
      <div className='col-md-7'>
      <div className="column_header"><div className="HeadingContainer">
        <span className="section-title">What's Popular</span>
      </div>
        <div className="selector_wrapper">
          <div className={`anchor ${mediaType === "all" ? 'selected': ""}`} onClick={()=> filterProgramType("all")}>All Media</div>
          <div className={`anchor ${mediaType === "series" ? 'selected': ""}`} onClick={()=> filterProgramType("series")}>Series</div>
          <div className={`anchor ${mediaType === "movie" ? 'selected': ""}`} onClick={()=> filterProgramType("movie")}>Movies</div>
        </div>
      </div>
      </div>
      <div className='col-md-5 text-end'>
      <input className='p-2 form-control' type='text' placeholder='Search...' name={"keyword"} value={keyword}
       onChange={(e)=> setKeyword(e.target.value)} />
      </div>
     </div>
      <div className='row'>
        {filterData.map((items,index )=> {
          return (<MediaCard key={index} items={items} />)
        })}
      </div>

    </div>
  )
}
