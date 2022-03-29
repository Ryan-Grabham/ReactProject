import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen';

function App() {
  return (
    <div>
      <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomeScreen/>} />
      </Routes>

</Router>
    </div>
  );
}

export default App;
