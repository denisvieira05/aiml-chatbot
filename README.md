# aiml-chatbot

IA chat-bot interface using [pandorabots](https://www.pandorabots.com/) API .

## How to use
- Clone Repository
```
  git clone https://github.com/fromdenisvieira/aiml-chatbot.git
```
- Change to your appId, userKey and botName in file  src/constants.js .
```
  export const pandora = {
    api: 'https://aiaas.pandorabots.com',
    appId: '****',
    userKey: '****',
    botName: '****'
  }
```
- Install PandoraBots CLI and Create chatbot.json
```
  $ npm install -g pb-cli
  $ pb init
  $ pb create
```
- Upload and compile your aiml File .
```
$ pb upload example.aiml
$ pb compile
```
- Install dependencies and Start application
```
  $ npm install
  $ npm start
```

- open in http://localhost:3000/

## Technologies used
- React
- Redux
- Redux-Saga
