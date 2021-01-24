import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import LoginForm from './components/LoginForm';
import Navbar from './components/NavigationBar';
import Injection from './pages/Injection';
import Vulnerability from './pages/Vulnerability'
import { createContext, useContext, useState } from 'react';
import { UserContext } from './components/UserProvider';

function App() {
  const { userProv } = useContext(UserContext);

  return (
      <div className="App">
        <Router>
          <div className="row justify-content-md-center">
            {userProv ? (<div className="col-1 col-1 bg-dark text-white">
              <Redirect to="/vulnerability"></Redirect>
            </div>) : (null)}

            <div className="col-11">
              <Switch>
                <Route path='/' exact component={LoginForm} />
                <Route path='/injection' component={Injection} />
                <Route path='/vulnerability' component={Vulnerability} />
              </Switch>
            </div>
          </div>
        </Router>
      </div>
  );
}

export default App;
