import React, {PropTypes} from 'react'

const styles = {
  wrapper: {
    display: 'flex',
    width: '100%',
    height: '100%',
    position: 'absolute',
    flexDirection: 'row',
    backgroundImage: "url('http://www.nadapop.com.br/wp-content/uploads/2016/10/quiz_hardcore.jpg')",
  }
}

const AppWrapper = ({ children }) => (
  <div style={styles.wrapper}>
    {children}
  </div>
)

AppWrapper.propTypes = {
  children: PropTypes.any
}

export default AppWrapper
