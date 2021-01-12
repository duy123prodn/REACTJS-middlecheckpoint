import React, { Component } from 'react'
class SongDetail extends Component {     
  render() {
    return (
        <div >
            <h3>{this.props.title}</h3>
            <h3>{this.props.author}</h3>
            <p>{this.props.publishedDate}</p>
            <p>{this.props.lyric}</p>
            <p>Other Song of {this.props.author}</p>
            <p></p>
        </div>
      );
  }
}

export default SongDetail;