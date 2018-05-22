import "materialize-css/dist/css/materialize.min.css";
import Nav from "./nav";
import React from 'react';
import Chat from "./chat";
import Home from "./home";
import { Route } from "react-router-dom";


const App = () => (
    <div>
        <Nav/>
        <div className="app">
            <div className="container">
                <Route exact path="/" component={Home}/>
                <Route path="/chat" component={Chat}/>
            </div>
        </div>
    </div>
);

export default App;
