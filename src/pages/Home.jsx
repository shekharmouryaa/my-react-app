import React from 'react'
import MyBookList from '../components/Table'
import MyModal from '../components/Modal'

const Home = () => {
  return (
    <div>
      <h2>Table Example</h2>
      <MyModal/>
      <MyBookList/>
    </div>
  )
}

export default Home