import React from 'react'

function Proupfile() {
    return (
        <>
            <div className="pro-info">
                <div className="inline-pro"></div>
                <div className="up-down-file">
                    <div className="up-file">
                        <form action="#" method="POST">
                            <span> إرفع صورك المفضلة من هنا <i className="fas fa-arrow-down"></i></span>
                            <br/>
                            <br/>
                            <input type="file" id="file" accept="image/*" required/>
                            <br/>
                            <br/>
                            <input id="namephoto" type="text" name="namephoto" placeholder="أدخل إسم للصورة" required/>
                            <br/>
                            <br/>
                            <textarea id="disphoto" name="disphoto" placeholder="أدخل وصف للصورة" required/>
                            <br/>
                            <br/>
                            <input type="submit" className="btn btn-success" id="upfile" value="رفع الصورة"/>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Proupfile
