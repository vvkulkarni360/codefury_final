import logo from './logo.svg';
import React from 'react';
import Home from './components/home';
import Loader from './components/loader';
import Signup from './components/signup';
import Login from './components/login';
import Main from './components/main';
import ChatBotFeature from './components/chatbotfeature';

function App() {
  return (
    <div className="container">
      <Home />
      <Loader />
      <Signup />
      <Login />
      <Main />
      <ChatBotFeature />
    </div>
  );
}

export default App;
