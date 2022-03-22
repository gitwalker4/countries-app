import React from 'react'

const CountryItems = ({item}) => {
  
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={item.flags.svg} alt='' />
        </div>
        <div className='card-back'>
          <h2>{item.name.common}</h2>
        </div>
      </div>
    </div>
  ) 
}

export default CountryItems