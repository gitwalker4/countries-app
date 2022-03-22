import React from 'react'
import Search from './Search'

const Header = ({searchCountry}) => {

  return (
    <header>
      <div className='header-content'>
        <div className='container'>
          <h1 className='country-header'>Countries of the World <span className='walker'> by Walker</span></h1>
        </div>
        <Search searchCountry={searchCountry} />
      </div>
    </header>
  )
}

export default Header