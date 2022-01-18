import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import store from '../src/store/';
import { Provider } from 'react-redux';

/*Pages*/
import Login from './view/login/';
import NewUser from './view/new-user/';
import Home from './view/home/';
import RecoveryPassword from './view/recovery-password/';
import MyFriends from './view/myfriends/';
import Chat from './view/chat/';
import Search from './view/search/';
import University from './view/university/';
import Perfil from './view/perfil/';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path='/' component={Login}/>
        <Route exact path='/novousuario' component={NewUser}/>
        <Route exact path='/home' component={Home}/>
        <Route exact path='/recoveryPassword' component={RecoveryPassword}/>
        <Route exact path='/myfriends' component={MyFriends}/>
        <Route exact path='/chat' component={Chat}/>
        <Route exact path='/search' component={Search}/>
        <Route exact path='/university' component={University}/>
        <Route exact path='/perfil' component={Perfil}/>
      </Router>
    </Provider>
  );
}

export default App;
