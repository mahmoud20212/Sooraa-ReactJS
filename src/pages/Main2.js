import React from 'react'
import Footer from '../components/Footer'
import Main from '../components/Main'
import NavBar from '../components/NavBar'
import Showlistimg from '../components/Showlistimg'

const Main2 = () =>{
    return (
        <div>
            <NavBar in='main2'/>
            <Main />
            <div className="inline"></div>
            <div className="phrase">
                <span>صور رائعة</span>
            </div>
            <Showlistimg />
        </div>
    )
}

export default Main2
