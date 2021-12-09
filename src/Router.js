import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Filmes from './moviegoers/Filmes/Filmes'
import Home from './moviegoers/Home/Home'

function Routers(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/filmes' component={Filmes} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routers