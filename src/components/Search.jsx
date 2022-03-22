import React from 'react'

const Search = ({searchCountry}) => {

  return (
    <div>
      <input type='text' placeholder='Search for a country' className='country-search' onChange={(e) => searchCountry(e.target.value)} autoFocus></input>
    </div>
  )
}

export default Search