import React, { Component } from 'react'
import SongDetail from './SongDetail'
import { Link, Route, Router, Switch } from 'react-router-dom'
class Songs extends Component {     
  render() {
    return (
        <Router>
          <div>
            <ul>
              <li>
                <Link to="">{this.props.title} - {this.props.author}</Link>
              </li>
            </ul>
        </div>
        <Switch>
            <Route path="">
              <SongDetail /> 
            </Route>
        </Switch>
        </Router>
      );
  }
}

export default Songs;