import React, { Component } from 'react'
import './media.css'

class Media extends Component {
  render() {
    return (
      <div className="Media">
        <div className="Media-cover">
          <img
            src="./images/covers/responsive.jpg"
            alt=""
            width={260}
            height={160}
            className="Media-image"
          />
          <h3 className="Media-title">Que es responsive design</h3>
          <p className="Media-author">LeonidasEsteban</p>
        </div>
      </div>
    )
  }
}

export default Media
