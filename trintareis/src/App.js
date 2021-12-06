import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";

/*Pages*/
import Login from './view/login/';
import NewUser from './view/new-user/';

function App() {
  return (
      <Router>
        <Route exact path='/' component={Login}/>
        <Route exact path='/novousuario' component={NewUser}/>
      </Router>
  );
}

export default App;
