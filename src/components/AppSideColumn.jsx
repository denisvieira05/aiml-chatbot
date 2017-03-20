import React, {PropTypes} from 'react'

const styles = {
  container: {
    display: 'flex',
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }
}

const AppSideColumn = ({ children }) => (
  <div style={styles.container}>
    {children}
  </div>
)

AppSideColumn.propTypes = {
  children: PropTypes.any
}

export default AppSideColumn
