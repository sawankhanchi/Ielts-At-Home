import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import Speaking from "./Speaking";
import Listening from "./Listening";
import Reading from "./Reading";
import Writing from "./Writing";
import Navbar from "./Navbar";
import { Switch, Route, Redirect } from "react-router-dom";

const App = () => {
    return (
        <>
        <Navbar />
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/speaking" component={Speaking} />
        <Route exact path="/listening" component={Listening} />
        <Route exact path="/reading" component={Reading} />
        <Route exact path="/writing" component={Writing} />
        <Redirect to="/" />
        </Switch>
          
        </>
    );
};

export default App;