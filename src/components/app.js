import "materialize-css/dist/css/materialize.min.css";
import Nav from "./nav";
import React from 'react';
import Chat from "./chat";
import Home from "./home";
import CreateChatRoom from "./create_chat_room";
import { Route } from "react-router-dom";


const App = () => (
    <div>
        <Nav/>
        <div className="app">
            <div className="container">
                <Route exact path="/" component={Home}/>
                <Route path="/chat/:id" component={Chat}/>
                <Route path="/create-room" component={CreateChatRoom}/>
            </div>
        </div>
    </div>
);

export default App;
