import React, { useState } from 'react'
import img1 from '../pages/images/10.jpg'
import img2 from '../pages/images/11.jpg'
import img3 from '../pages/images/12.jpg'
import img4 from '../pages/images/13.jpg'
import img5 from '../pages/images/14.jpg'
import img6 from '../pages/images/15.jpg'
import img7 from '../pages/images/16.jpg'
import img8 from '../pages/images/17.jpg'
import img9 from '../pages/images/g.jpg'


const Showlistimg = () => {
    const data = [
            {
            imgSrc: img1,
        },
        {
            imgSrc: img2,
        },
        {
            imgSrc: img3,
        },
        {
            imgSrc: img4,
        },
        {
            imgSrc: img5,
        },
        {
            imgSrc: img6,
        },
        {
            imgSrc: img7,
        },
        {
            imgSrc: img8,
        },
        {
            imgSrc: img9,
        },
        {
            imgSrc: img9,
        },
        {
            imgSrc: img9,
        },
        {
            imgSrc: img9,
        },
    ]
    const [model, setModel] = useState(false)
    const [tempTmgSrc, SetTempImgSrc] = useState('')
    const getImg = (imgSrc) =>{
        SetTempImgSrc(imgSrc)
        setModel(true)
    }
    return (
        <>
            <div className={model? "model open" : "model"}>
                <img src={tempTmgSrc}/>
                <i onClick={() => setModel(false)} className="fas fa-times"></i>
            </div>
            <div className="gallery">
                {data.map((i, index) =>(
                    <div className="pics" key={index} onClick={() => getImg(i.imgSrc)}>
                        <img src={i.imgSrc} alt=''  style={{width: '100%'}} />
                    </div>
                ))}
            </div>
        </>
    )
}

export default Showlistimg
