import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import Home from './components/Pages/Home';
import Services from './components/Pages/Services';
import Products from './components/Pages/Product';
import SignUp from './components/Pages/SignUp';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/services" element={<Services/>}></Route>
          <Route path="/products" element={<Products/>}></Route>
          <Route path="/sign-up" element={<SignUp/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
