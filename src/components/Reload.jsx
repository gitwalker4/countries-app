import React from 'react'

const Reload = ({refresh}) => {
  return (
    <div className='load-div'>
      <button className='load' onClick={refresh}>Load New Countries</button>
    </div>
  )
}

export default Reload