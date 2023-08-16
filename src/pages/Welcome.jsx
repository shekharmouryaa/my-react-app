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
  },[keyword,media,filterData,mediaType])

  const filterProgramType = (mediatype) =>{
    setMediaType(mediatype)
    setKeyword("")
  } 
  // Below code used for add class dynamic
  // {`anchor ${mediaType === "all" ? 'selected': ""}`}

   return (
    <div className='container'>
     <div className='row my-4 align-items-center'>
      <div className='col-md-7'>
      <div class="column_header"><div class="HeadingContainer">
        <span class="section-title">What's Popular</span>
      </div>
        <div class="selector_wrapper">
          <div class={`anchor ${mediaType === "all" ? 'selected': ""}`} onClick={()=> filterProgramType("all")}>All Media</div>
          <div class={`anchor ${mediaType === "series" ? 'selected': ""}`} onClick={()=> filterProgramType("series")}>Series</div>
          <div class={`anchor ${mediaType === "movie" ? 'selected': ""}`} onClick={()=> filterProgramType("movie")}>Movies</div>
        </div>
      </div>
      </div>
      <div className='col-md-5 text-end'>
      <input className='p-2 form-control' type='text' placeholder='Search...' name={"keyword"} value={keyword}
       onChange={(e)=> setKeyword(e.target.value)} />
      </div>
     </div>
      <div className='row'>
        {filterData.map(items => {
          return (<MediaCard items={items} />)
        })}
      </div>

    </div>
  )
}
