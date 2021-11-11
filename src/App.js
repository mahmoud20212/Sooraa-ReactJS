// import { Container, Row } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Home from './pages/Home';
import Footer from './components/Footer';
import Resultsearch from './pages/Resultsearch';
import Main2 from './pages/Main2';
import Profile from './pages/Profile';
import Pagenotfound from './pages/Pagenotfound'

function App() {
    return (
        <>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/result" exact component={Resultsearch} />
                <Route path="/main" component={Main2} />
                <Route path="/profile" component={Profile} />
                <Route path="/signup" component={Signup} />
                <Route path="/signin" component={Signin}/>
                <Route component={Pagenotfound}/>
            </Switch>
            <Footer/>
        </BrowserRouter>
        </>
    )
}

export default App;