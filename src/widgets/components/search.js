import React from 'react'
import './search.css'
const Search = (props) => (
  <form
    className='Search'
    onSubmit={props.handleSubmit}
  >
    <input
      ref={props.setRef}
      className='Search-input'
      placeholder='Busca tu video favorito'
      type='text'
      value={props.value}
      onChange={props.handleChange}
    />
	</form>
)

export default Search