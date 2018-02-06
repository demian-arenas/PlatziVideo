import React, { Component } from 'react'
import Search from '../components/search'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as actions from "../../actions";

class SearchContainer extends Component {
  state = {
    value: 'Luis Fonsi'
  }
  handleSubmit = (event) => {
    event.preventDefault()
    this.props.actions.searchAsyncEntities(this.input.value);
  }

  setInputRef = element => {
    this.input = element
  }

  handleInputChange = event => {
    this.setState({
      value: event.target.value.replace(' ', '-')
    })
  }
  render() {
    return (
      <Search
        value={this.state.value}
        handleChange={this.handleInputChange}
        setRef={this.setInputRef}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(SearchContainer)
