import React from 'react'
import NavBar from '../components/NavBar'

function Signup() {
    return (
        <>
            <NavBar />
            <div className="box">
                <div className="main">
                    <div className="register">
                        <div className="inline-pro"></div>
                        <h2>تسجيل عضو جديد</h2>
                        <form id="register" method="POST">
                            <label><i class="far fa-user"></i> إسم المستخدم</label>
                            <br/>
                            <input type="text" name="username" id="input" placeholder="أدخل إسم المستخدم" required />
                            <br/><br/>
                            <label><i class="far fa-envelope"></i> البريد الإلكتروني</label>
                            <br/>
                            <input type="email" name="email" id="input" placeholder="أدخل البريد الإلكتروني" required />
                            <br/><br/>
                            <label><i class="far fa-calendar-alt"></i> تاريخ الميلاد</label>
                            <br/>
                            <input dir="rtl" type="date" name="age" id="input" required/>
                            <br/><br/>
                            <label><i class="fas fa-lock"></i> كلمة المرور</label>
                            <br/>
                            <input type="password" name="password" id="input" placeholder="******" required />
                            <br/><br/>
                            <center>
                                <button type="submit" id="submit">تسجيل</button>
                            </center>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup