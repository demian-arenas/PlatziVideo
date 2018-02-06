import React, { Component } from 'react'
import Search from '../components/search'

class SearchContainer extends Component {
  state = {
    value: 'Luis Fonsi'
  }
  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.input.value)
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

export default SearchContainer
