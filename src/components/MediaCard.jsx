import React from 'react'

export const MediaCard = ({items}) => {
  return (
   
         <div className='col-3'>
              <div className='card m-3'>
                <div className='card-body'>
                  <img className="card-img" src={items.images["Poster Art"].url} alt="" />
                  <p>{items.title}</p>
                  <p>{items.programType}</p>
                  <p>{items.releaseYear}</p>
                </div>
              </div>
            </div>
   
  )
}
