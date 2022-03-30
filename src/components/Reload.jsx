import React from 'react'

const Reload = ({refresh}) => {
  return (
    <div>
      <button className='load' onClick={refresh}>Load New Countries</button>
    </div>
  )
}

export default Reload