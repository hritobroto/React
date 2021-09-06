import React, { useState } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Login from './Login';
import { useStateValue } from "./StateProvider";
import { actionTypes } from './reducer';

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ?(
        <div>
        <Login />
        
        </div>
      ):(
      <div className="app__body">
        <Router>
          <Switch>
            
            <Route path="/rooms/:roomId">
            <Sidebar />
              <Chat />
            </Route>
            
          </Switch>
        </Router>
      </div>
      )}
    </div>
  );
}

export default App;
