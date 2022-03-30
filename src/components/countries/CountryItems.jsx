import React from 'react'

const CountryItems = ({item}) => {

  return (
    <div className='card' loading='lazy'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={item.flags.svg} alt='' />
        </div>
        <div className='card-back'>
          <h1>{item.name.common}</h1>
          <div className='card-div'>
            <h2>Capital: </h2>
            <p>{item.capital}</p>
          </div>
          <div className='card-div'>
            <h2>Population: </h2>
            <p>{item.population}</p>
          </div>
          <div className='card-div'>
            <h2 className='list-header'>Official Language(s): </h2>
            {item.languages &&
              Object.values(item.languages).slice(0,2).map((language,index) => {
              return <p key={index} className='languages'>{language}</p>
            })}  
          </div>
          <div className='card-div'>
            <h2>Continent: </h2>
            <p>{item.continents}</p>
          </div>
          <a href={item.maps.googleMaps} target='_blank' rel='noreferrer' className='map-link'>See on a map</a>
        </div>
      </div>
    </div>
  )
}

export default CountryItems