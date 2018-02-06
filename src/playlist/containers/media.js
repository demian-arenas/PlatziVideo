import React, { Component } from 'react'
import Media from '../components/media'
import { connect } from 'react-redux'

class MediaContainer extends Component {
  openModal = (id) => {
    this.props.dispatch({
      type: 'OPEN_MODAL',
      payload: {
        mediaId: id
      }
    })
  }
  render() {
    return <Media openModal={this.openModal} {...this.props.data.toJS()} />
  }
}

const mapStateToProps =  (state, props) => {
  return { data: state.getIn(["data", "entities", "media", props.id]) };
}

export default connect(mapStateToProps)(MediaContainer)