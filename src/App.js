import React, {Component} from 'react';
import './App.css';
import Page404 from "./component/Page404/Page404"
import Light from "./component/Light/Light"
import { HashRouter as Router, Route,Switch } from "react-router-dom";



class App extends Component {
  render() {
    return (
        <div>
          <Router>
            <Switch>
                <Route exact path={`/light`} component={Light}/>
                <Route component={Page404}/>
            </Switch>
          </Router>

        </div>

    );
  }
}

export default App;
