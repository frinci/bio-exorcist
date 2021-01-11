import React from 'react';
import Home from '../components/Home'
import popUp from '../../public/registration-page.html';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path ='registration' component={popUp}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
