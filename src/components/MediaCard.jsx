import React from 'react'

export const MediaCard = ({ items }) => {
  return (
    <div className='col-3'>
      <div className='card m-2'>
        <div className='card-body'>
          <img className="card-img" src={items.images["Poster Art"].url} alt="" />
          <p className='media-info'>{items.title}</p>
          <p className='media-info'>{items.programType}</p>
          <p className='media-info'>{items.releaseYear}</p>
        </div>
      </div>
    </div>
  )
}
