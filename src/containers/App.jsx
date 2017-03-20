import React, { PropTypes, PureComponent } from 'react'
import { connect } from 'react-redux'
import { AppWrapper, AppSideColumn, AppContainer, AppHeader, Messages, Message, SendMessage } from 'components'
import { getMessages } from 'store/selectors'
import * as actions from 'store/actions'

class App extends PureComponent {
  componentDidMount () {
    this.props.onDidMount()
  }

  render () {
    const { messages, onSendMessage } = this.props

    const styles = {
      topBarHeader: {
        width: '100%',
        height: '1em',
        backgroundColor: '#000',
        marginBottom: '2em'

      }
    }

    return (
      <AppContainer>
        <div  style={styles.topBarHeader}>
        </div>
        <AppWrapper>
          <AppSideColumn>
            <AppHeader
              title='Underground Bands Bot'
            />
            <a href="https://github.com/fromdenisvieira/aiml-chatbot" target="_blank">
              <img src="https://diversity.github.com/assets/svg/mark-github.svg"  style={{width:'50px',height:'50px',marginTop: '1em'}}/>
            </a>


          </AppSideColumn>
          <AppContainer>
            <Messages>
              {messages.map((message, index) =>
                <Message
                  key={index}
                  alignSelf={
                    message.bot
                      ? 'flex-start'
                      : 'flex-end'
                  }
                  borderColor={
                    message.bot
                      ? '#00b5ad'
                      : '#f2711c'
                  }
                  text={message.text}
                />
              )}
            </Messages>
            <SendMessage
              onSend={text => onSendMessage({ text })}
            />
            </AppContainer>
        </AppWrapper>
      </AppContainer>
    )
  }
}

App.propTypes = {
  messages: PropTypes.array,
  onDidMount: PropTypes.func,
  onSendMessage: PropTypes.func
}

const mapStateToProps = state => ({
  messages: getMessages(state)
})

const mapDispatchToProps = ({
  onDidMount: actions.init,
  onSendMessage: actions.sendMessage
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
