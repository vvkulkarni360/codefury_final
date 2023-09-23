import logo from './logo.svg';
import React from 'react';
import Home from './components/home';
import Loader from './components/loader';
import Signup from './components/signup';
import Login from './components/login';
import Main from './components/main';
import AI from './components/aiprompt';
import ChatBotFeature from './components/chatbotfeature';
import CheerUp from './components/cheerup';
import WellBeing from './components/wellbeing';
import QuizHolder from './components/QuizHolder';
function App() {
  return (
    <div className="container">
      <Home />
      <Loader />
      <Signup />
      <Login />
      <Main />
      <ChatBotFeature />
      <AI />
      <CheerUp />
      <QuizHolder>
      <WellBeing />
      </QuizHolder>
    </div>
  );
}

export default App;
