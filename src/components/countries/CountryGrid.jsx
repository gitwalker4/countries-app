import React from 'react'
import CountryItems from './CountryItems'

const CountryGrid = ({ countries, isLoading, filteredCountries, search }) => {

  const compareCountries = (a,b) => {
    a = a.toLowerCase()
    b = b.toLowerCase()

    return (a < b) ? -1 : (a > b) ? 1 : 0
  }

  const countryArray = countries.sort((a,b) => {
    return compareCountries(a.name.common, b.name.common)
  })

  const filteredCountryArray = filteredCountries.sort((a,b) => {
    return compareCountries(a.name.common, b.name.common)
  })


  
  if (isLoading) {
    return <h1>Loading...</h1> 
  } else if ( search.length > 1 ) {
    return (
      <div>
        <div className='cards'>
          {filteredCountryArray.map((item, index) => (
            <CountryItems key={index} item={item}></CountryItems>
          ))}
        </div>
      </div> 
    )
  } else {
    return (
      <div>
        <div className='cards'>
          {countryArray.map((item, index) => (
            <CountryItems key={index} item={item}></CountryItems>
          ))}
        </div>
      </div>  
    )
  }
}

export default CountryGrid