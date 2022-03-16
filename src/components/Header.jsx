import PropTypes from 'prop-types';

function Header({text, bgColor, textColor}) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor
  }

  return (
    <header style={headerStyles}>
      <div className='container'>
        <h2>{text}</h2>
      </div>
    </header>
  )
}

Header.defaultProps = {
  text: 'Baller Stats',
  bgColor: 'rgba(10,20,57, 0.7)',
  textColor: '#fff'
}

export default Header