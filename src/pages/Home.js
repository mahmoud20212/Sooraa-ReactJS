import React from 'react'
import Footer from '../components/Footer'
import Main from '../components/Main'
import NavBar from '../components/NavBar'
import Showlistimg from '../components/Showlistimg'

const Home = () => {
  return (
    <div>
      <NavBar />
      <Main />
      <div className="inline"></div>
      <div className="phrase">
        <span>صور رائعة</span>
      </div>
      <Showlistimg />
    </div>
  )
}

export default Home

