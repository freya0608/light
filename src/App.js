import React, {Component} from 'react';
import './App.css';
import Ff from "./component/Fff/Fff"



class App extends Component {
  render() {
    return (
        <div>
          {/*<Router>*/}
          {/*  <Switch>*/}
          {/*      <Route exact path={`/`} component={Login}/>*/}
          {/*      <Route exact path={`/index`} component={Index}/>*/}
          {/*      <Route exact path={`/fee`} component={AddFee}/>*/}
          {/*      /!*<Route exact path={`/duty`} component={Duty}/>*!/*/}
          {/*      <Route component={Page404}/>*/}
          {/*  </Switch>*/}
          {/*</Router>*/}

          <Ff/>

        </div>

    );
  }
}

export default App;
