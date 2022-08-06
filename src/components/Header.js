import PropTypes from 'prop-types'
import Button from './Button'

function Header({title}) {
  return (
    <header className='header'>
      <h1 style={headingStyle}>{title}</h1>
      <Button color='green' text='hellow' />
    </header>
  )
}

// Default Props
Header.defaultProps = {
  title:'Task Tracker'
}

// prop types

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

// component style object (css in js)
const headingStyle = {
  
}

export default Header