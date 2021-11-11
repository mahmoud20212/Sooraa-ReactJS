import React from 'react'
import userimg from '../pages/images/user1.png'

function Proinfo() {
    return (
        <>
            <div className="pro-info">
                <div className="inline-pro"></div>
                <div className="glass">
                    <div className="informations text-center">
                        <img className="user-img" src={userimg}/>
                    </div>
                    <div className="info text-center">
                        <h1>محمود</h1>
                        <h3>تاريخ الميلاد: 8-11-2021</h3>
                        <h3>البريد الإلكتروني: occee123@gmail.com </h3>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Proinfo
