import React from 'react'
import Search from './Search'

const Main = () => {
    return (
        <div className="search-box bg-image">
            <div className="container text-center">
                <h1 style={{fontSize: "50px"}}>Sooraa</h1>
                <p>المكان الأفضل لتحميل ورفع الصور المفضلة لديك</p>
                <Search position="center"/>
            </div>
        </div>
    )
}

export default Main
