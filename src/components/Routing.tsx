import React, {FC} from 'react';
import {Route, Switch } from 'react-router-dom';
import Home from "./Home";

const Routing:FC = () => (
        <Switch>
            <Route path='/'>
                <Home />
            </Route>
        </Switch>
    );

export default Routing;