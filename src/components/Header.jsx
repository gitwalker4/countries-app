import React from 'react'
import Search from './Search'
import Reload from './Reload'

const Header = ({searchCountry, refresh}) => {

  return (
    <header>
      <div className='header-content'>
        <div className='container'>
          <h1 className='country-header'>Countries of the World</h1>
          <h2 className='walker'> by Walker</h2>
        </div>
        <Search searchCountry={searchCountry} />
        <Reload refresh={refresh} />
      </div>
    </header>
  )
}

export default Header