import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'

function Pro() {
    return (
        <>
            <div className="pro-right">
                <div className="inline-pro"></div>
                    <h1>الملف الشخصي</h1>
                    <hr/>
                <div className="pro-content container">
                    <ListGroup>
                        <NavLink className='pro-link' exact to='/profile' activeClassName="selected"><i style={{fontSize: '17px'}} className="far fa-user"></i> المعلومات الشخصية</NavLink>
                        <NavLink className='pro-link' to='/profile/manageFile' activeClassName="selected"><i class="far fa-folder-open"></i> إدارة الملفات</NavLink>
                        <NavLink className='pro-link' to='/profile/myRepository' activeClassName="selected"><i class="fas fa-cog"></i> مستودعي</NavLink>
                    </ListGroup>
                </div>
                
            </div>
            
        </>
    )
}

export default Pro
