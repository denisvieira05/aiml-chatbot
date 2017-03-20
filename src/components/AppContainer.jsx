import React, {PropTypes} from 'react'

const styles = {
  container: {
    display: 'flex',
    width: '100%',
    height: '100%',
    flexDirection: 'column',
  }
}

const AppContainer = ({ children }) => (
  <div style={styles.container}>
    {children}
  </div>
)

AppContainer.propTypes = {
  children: PropTypes.any
}

export default AppContainer
