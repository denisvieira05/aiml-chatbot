import React, {PropTypes} from 'react'

const styles = {
  wrapper: {
    borderRadius:'1em',
    border: '2px solid',
    color: 'black',
    marginBottom: 5,
    padding: '5px 10px',
    background: 'white',
  }
}

const Message = ({ text, alignSelf, borderColor }) => (
  <div style={{...styles.wrapper, alignSelf, borderColor}}>
    <p>{text}</p>
  </div>
)

Message.propTypes = {
  borderColor: PropTypes.string,
  alignSelf: PropTypes.string,
  text: PropTypes.string
}

Message.defaultProps = {
  borderColor: '#2185D0',
  alignSelf: 'flex-start'
}

export default Message
