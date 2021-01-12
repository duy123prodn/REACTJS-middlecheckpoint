import React from 'react'
import Home from './components/Home'
import AddNewSong from './components/AddNewSong'
import ListSongs from './components/ListSongs'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <div> 
          <ul>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/AddNewSong">Add New Song</Link>
            </li>
            <li>
              <Link to="/ListSongs">ListSongs</Link>
            </li>
          </ul>

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
