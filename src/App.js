import React from 'react';
import Header from './Header';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';
import Chats from './Chats';
import ChatScreen from './ChatScreen';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    
      <Router>
        <Switch>
          <Route path='/chat/:person'>
            <Header backButton='/chat' />
            <ChatScreen />
          </Route>

          <Route path='/chat'>
            <Header backButton='/' />
            <Chats />
          </Route>

          <Route path='/'> 
            <Header />
           <TinderCards />
           <SwipeButtons />
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
