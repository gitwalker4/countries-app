import {React, lazy, Suspense} from 'react'
// import CountryItems from './CountryItems'
const CountryItems = lazy(() => import('./CountryItems'))

const CountryGrid = ({ countries, isLoading, filteredCountries, search, visible, loadMore }) => {

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
    return <h1 className='loading'>Loading...</h1> 
  } else if ( search.length > 1 ) {
    return (
      <Suspense fallback={<div></div>}>
        <div>
          <div className='cards'>
            {filteredCountryArray.map((item, index) => (
              <CountryItems key={index} item={item}></CountryItems>
            ))}
          </div>
        </div>
      </Suspense> 
    )
  } else {
    return (
      <Suspense fallback={<div></div>}>
        <div>
          <div className='cards'>
            {countryArray.slice(0, visible).map((item, index) => (
              <CountryItems key={index} item={item}></CountryItems>
            ))}
          </div>
          <div className='loadDiv'>
            {visible < countryArray.length && (
              <button className='load' onClick={loadMore}>Load More</button>
            )}
          </div>
        </div>
      </Suspense>  
    )
  }
}

export default CountryGrid