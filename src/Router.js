import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Navbar from './components/Navbar'

 function Router() {
    return (
        <BrowserRouter>
        <Navbar/> 
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/projects" component={Projects}/>
        </Switch>
        </BrowserRouter>
    )
}


export default Router