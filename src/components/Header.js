import PropTypes from 'prop-types'

function Header({title}) {
  return (
    <header>
      <h1 style={headingStyle}>{title}</h1>
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
  color:'red',
  backgroundColor:'blue'
}

export default Header