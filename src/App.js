
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
      
    </div>
  );
}

export default App;
