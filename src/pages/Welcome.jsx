import React from 'react'
import { Link } from 'react-router-dom'

export const Welcome = () => {
  return (
    <div>
      <h5>Home</h5>
      <Link to="/series" >Series</Link> <br />
      <Link to="/movies" >Movies</Link>
    </div>
  )
}
