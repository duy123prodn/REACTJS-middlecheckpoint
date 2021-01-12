import React, { Component } from 'react'
import SongDetail from './SongDetail'
import { Link, Route, Router, Switch } from 'react-router-dom'

class Songs extends Component {     
  render() {
    return (
     
        <div className="Songs">

          <Link 

          key={this.props.key}

          >{this.props.title}</Link>
        </div>
    );
  }
}

export default Songs;