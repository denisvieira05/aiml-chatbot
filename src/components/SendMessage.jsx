import React, { Component, PropTypes } from 'react'
import { Input, Icon } from 'components'
import recognizeSpeech from 'recognize-speech'

const styles = {
  input: {
    background: 'rgba(233,234,243,1.0)',
    outline: 'none',
    borderColor: 'rgba(34,36,38,.15)',
    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 1px 1px 0px',
    height: 54,
    fontSize: 16
  }
}

class SendMessage extends Component {
  constructor (props) {
    super(props)
    this.state = this.initialState
  }

  get initialState () {
    return ({
      message: ''
    })
  }

  sendMessage = () => {
    const { message } = this.state

    if (message.trim()) {
      this.setState({message: ''}, () => {
        this.props.onSend(message)
      })
    }
  }

  handleInputChange = ({ target: { value } }) => {
    const { recording } = this.state

     this.setState({message: value});
  }

  handleInputKeyPress = ({ key, target: { value } }) => {
    if (key === 'Enter') this.sendMessage()
  }

  renderIcon = () => {
    const { message } = this.state
    const SendMessageIcon = (
      <Icon
        name='send'
        color='black'
        inverted
        circular
        link
        onClick={this.sendMessage}
      />
    )

    return SendMessageIcon
  }

  render () {
    const { message } = this.state

    return (
      <Input
        value={ message }
        autoFocus
        style={styles.input}
        icon={this.renderIcon()}
        onChange={this.handleInputChange}
        onKeyPress={this.handleInputKeyPress}
      />
    )
  }
}

SendMessage.propTypes = {
  onSend: PropTypes.func
}

export default SendMessage
