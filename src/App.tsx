import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";

function App() {
  const TOKEN =""
  const {WebClient} = require('@slack/web-api');
  const web = new WebClient(TOKEN);
  const channelId = 'C01GTKY77U6';

  const sendMsg = async() => {
    await web.chat.postMessage({channel: channelId, text: '고은비님이 클래스룸에 입장하셨습니다.'});
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Click Button to send message to slack
        </p>
        <a
          className="App-link"
          onClick = {sendMsg}
        >
          Send Message
        </a>
      </header>
    </div>
  );
}

export default App;
