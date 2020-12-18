import React from "react";
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { createBrowserHistory } from 'history';

import Intro from "./intro/intro";
import SplashBar1 from "./splashScreen/splashBar1";
import SplashBar2 from "./splashScreen/splashBar2";
import SplashBar3 from "./splashScreen/splashBar3";
import Login from "./login/login";
const history = createBrowserHistory()

export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Intro} />
                    <Route exact path="/splash1" component={SplashBar1} />
                    <Route exact path="/splash2" component={SplashBar2} />
                    <Route exact path="/splash3" component={SplashBar3} />
                    <Route path="/login" component={Login} />
                </Switch>
            </BrowserRouter>
        );
    }
}