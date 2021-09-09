import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routing from "./components/Routing";
import Navigation from "./components/Navigation";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
    <BrowserRouter>
        <Navigation/>
        <Routing/>
    </BrowserRouter>
);

export default App;