import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import Loader from './components/loader';
import Signup from './components/signup';
import Login from './components/login';

function App() {
  return (
    <div className="container">
      <Home />
      <Loader />
      <Signup />
      <Login />
    </div>
  );
}

export default App;
