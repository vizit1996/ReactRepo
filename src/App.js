import React from 'react';
import { BrowserRouter, Route , Switch } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import './App.css';
import Login from './components/Login/Login';
import useToken from './components/App/useToken';

function App() {
  const {token, setToken} = useToken();

  if(!token){
    return <Login setToken={setToken} />
  }
  

  

  return(
    <div className='wrapper'>
      <h1>Application</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  ); 
}

export default App;
