import React from 'react'
import { Route } from 'react-router'
import NavBar from '../components/NavBar'
import Pro from '../components/Pro'
import Proinfo from '../components/Proinfo'
import Proupfile from '../components/Proupfile'
import Repository from '../components/Repository'

const Profile = () => {
    return (
        <div>
            <NavBar position='top' in='main2'/>
            <Pro />
            <Route exact path="/profile" component={Proinfo}/>
            <Route path="/profile/manageFile" component={Proupfile}/>
            <Route path="/profile/myRepository" component={Repository}/>
            <div className="clearfix"></div>
        </div>
    )
}

export default Profile
