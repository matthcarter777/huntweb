import React from 'react';

import {BrowserRouter,Switch,Route } from "react-router-dom";

import Main from './pages/main';
import Product from './pages/product';
import ProductCreate from './pages/createProduct';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main}/>
            <Route exact path='/products/:id' component={Product}/>
            <Route exact path='/products/create' component={ProductCreate}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;