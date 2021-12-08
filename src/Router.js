import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './moviegoers/Home/Home'

function Routers(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routers