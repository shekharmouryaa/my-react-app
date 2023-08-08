import React, { useEffect } from 'react'

export const Series = () => {

  const [media, setMediaData] = React.useState([])

  const getApiData = () => {
    fetch('url')
      .then(response => response.json())
      .then(data => { setMediaData(data?.entries) })
      .catch(error => console.error("error", error))
  }

  console.log(media);
  useEffect(() => {
    getApiData()
  }, [])

  return (
    <div className='container'>
      <h1>Series</h1>
      <div className='row'>
        {media.filter(media => media?.programType === 'series').map(items => {
          return (
            <div className='col-3'>
              <div className='card'>
                <div className='card-body'>
                  <img width={100} src={items.images["Poster Art"].url} alt="" />
                  <p>{items.title}</p>
                  <p>{items.programType}</p>
                  <p>{items.releaseYear}</p>
                </div>
              </div>
            </div>)
        })}
      </div>
    </div>
  )
}
