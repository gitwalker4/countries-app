import React from 'react'

const CountryItems = ({item}) => {

  let languagesArray = []
  let bordersArray = []

  if ( item.name.common !== 'Antarctica') {
    languagesArray.push(Object.values(item.languages))
  } 
    
  if ( item.borders ) {
    bordersArray.push(Object.values(item.borders))
  }

  const setLanguages = languagesArray.map((language, index) => {
    return <li className='list-item' key={index}> {`${language}`}</li>
  })

  const setBorders = bordersArray.map((border, index)=> {
    return <li className='list-item' key={index}> {`${border}`}</li>
  })

  console.log(setBorders)

  return (item.borders) ? (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={item.flags.svg} alt='' />
        </div>
        <div className='card-back'>
          <h1>{item.name.common}</h1>
          <h3>Capital: {item.capital}</h3>
          <h3>Population: {item.population}</h3>
          <ul>
            <h3 className='list-header'>Official Language(s): </h3>  
            {setLanguages}
          </ul>
          <ul>
            <h3 className='list-header'>Borders:</h3>
            {setBorders}
          </ul>
          <a href={item.maps.googleMaps} target='_blank' rel='noreferrer' className='map-link'>See on a map</a>
        </div>
      </div>
    </div>
  ) : (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={item.flags.svg} alt='' />
        </div>
        <div className='card-back'>
          <h1>{item.name.common}</h1>
          <h3>Capital: {item.capital}</h3>
          <h3>Population: {item.population}</h3>
          <ul>
            <h3 className='list-header'>Official Language(s): </h3>  
            {setLanguages}
          </ul>
          <div>
            <h3 className='list-header'>Borders: </h3>
            <p className='list-item'>None</p>
          </div>
          <a href={item.maps.googleMaps} target='_blank' rel='noreferrer' className='map-link'>See on a map</a>
        </div>
      </div>
    </div>
  )
}

export default CountryItems