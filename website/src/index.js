import 'bootstrap/dist/css/bootstrap.css'
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";
import indexRoutes from "./routes.jsx";
import registerServiceWorker from './registerServiceWorker'


import  "./css/base.css"
import  "./css/pages/LandingPageStyle.css"
import  "./css/pages/LoginPageStyle.css"

//ReactDOM.render(<App />, document.getElementById('root'))
var hist = createBrowserHistory();
ReactDOM.render(

  <Router history={hist}>
      <Switch>
        {indexRoutes.map((prop, key) => {
          return <Route path={prop.path} key={key} component={prop.component} />;
        })}
      </Switch>
    </Router>,


  document.getElementById("root")
);
registerServiceWorker()