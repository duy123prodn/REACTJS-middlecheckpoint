import MessengerCustomerChat from 'react-messenger-customer-chat';
import React from 'react'
import './App.css'
import Home from './components/Home'
import AddNewSong from './components/AddNewSong'
import ListSongs from './components/ListSongs'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="Navbar">  
              <NavLink to="/Home">Home</NavLink>
            
              <NavLink to="/AddNewSong">Add New Song</NavLink>
            
              <NavLink to="/ListSongs">ListSongs</NavLink>
        </div>
        <div >
          <Switch>
            <Route path="/Home">
              <Home />
            </Route>
            <Route path="/AddNewSong">
              <AddNewSong />
            </Route>
            <Route path="/ListSongs">
              <ListSongs /> 
            </Route>
          </Switch>
        </div>
      </Router>
    <div>
      <MessengerCustomerChat
          pageId="105409911443105"
          appId="338273787600006"
          htmlRef="<REF_STRING>"
      /> 
    </div>
    </div>
  );
}

export default App;
