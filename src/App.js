import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Header from './Components/Header';
import HomeScreen from './Screens/HomeScreen';
import AddProductScreen from './Screens/AddProductScreen';

function App() {
  return (
    <div>
      <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomeScreen/>} />
        <Route exact path = "/admin/addproduct" element={<AddProductScreen/>}/>
      </Routes>

</Router>
    </div>
  );
}

export default App;
