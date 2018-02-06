import React, { Component } from 'react'
import Search from '../components/search'
import { connect } from 'react-redux'
import { searchEntities } from '../../actions'

class SearchContainer extends Component {
  state = {
    value: 'Luis Fonsi'
  }
  handleSubmit = (event) => {
    event.preventDefault()
    this.props.dispatch(searchEntities(this.input.value));
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



export default connect()(SearchContainer)
