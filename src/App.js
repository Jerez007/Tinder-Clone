import React from 'react';
import Header from './Header';
import TinderCards from './TinderCards';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />      
      <Router>
        <Switch>
          <Route path='/chat'>
           <h1>I am the chat page</h1>
          </Route>
          <Route path='/'> 
          {/* Tinder Cards  */}
           <TinderCards />
          </Route>          
        </Switch>


        {/* Buttons below tinder cards */}

        {/* Chats screen. List of all messages with matches */}
        {/* Individual chat screens  */}

      </Router>
    </div>
  );
}

export default App;
