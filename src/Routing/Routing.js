import React from 'react';
import {Route, Switch} from "react-router-dom";
import GameStart from "../pages/GameStart/GameStart";
import Game from "../pages/Game/Game";
import GameOver from "../pages/GameOver/GameOver";


const Routing = () => {
    return (
        <Switch>
            <Route path="/" exact component={ GameStart }/>
            <Route path="/game" exact component={ Game }/>
            <Route path="/over" exact component={ GameOver }/>
        </Switch>
    );
};

export default Routing;