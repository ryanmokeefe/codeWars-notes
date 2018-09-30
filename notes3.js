post.js:

import React, { Component } from 'react'

class Post extends Component {
  render () {
    return (
      <div>
        <h1 className="best-h1-ever">{this.props.title}</h1>
        <h2>By {this.props.author}</h2>
        <p>{this.props.body}</p>
        <ul>
          {this.props.comments.map(comment => {
            return <li>{comment}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default Post
