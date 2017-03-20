import React, {PropTypes} from 'react'

const styles = {
  wrapper: {
    textAlign: 'center',
    marginBottom: 10,
  },
  headerTitle: {
      border: '3px solid white',
      padding: '0.5em',
      textTransform: 'uppercase',
      color: 'white'
  }
}

const AppHeader = ({ title, description }) => (
  <div>
    <h1 style={styles.wrapper} className='ui header'>
      <div className='content'  style={styles.headerTitle}>
        {title}
        {
          description ?
            <div className='sub header'>
              {description}
            </div>
            :null
        }

      </div>
    </h1>
  </div>
)

AppHeader.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
}

export default AppHeader
